import { google } from "googleapis";
import nc from "next-connect";
import { useSession } from "next-auth/react";

const createEvent = nc().post(async (req, res) => {
  const { data: session, status } = useSession();

  if (status !== 200 || !session) {
    res.status(401).send("Unauthorized");
    return;
  }

  const auth = new google.auth.OAuth2({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    accessToken: session.accessToken,
  });

  const calendar = google.calendar({ version: "v3", auth });
  const event = {
    summary: "Test Event",
    location: "Somewhere",
    description: "Testing Google Calendar API",
    start: {
      dateTime: "2023-02-25T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2023-02-25T17:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    reminders: {
      useDefault: true,
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    res.status(200).send("Event created: " + response.data.htmlLink);
  } catch (err) {
    console.error("Error creating event: " + err);
    res.status(500).send("Internal Server Error");
  }
});

export default createEvent;
