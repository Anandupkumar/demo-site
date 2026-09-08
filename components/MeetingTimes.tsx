import type { Meeting } from "@/lib/content";

type MeetingTimesProps = {
  meetings: Meeting[]
  note?: string
};

export function MeetingTimes({ meetings, note }: MeetingTimesProps) {
  return (
    <div>
      {note ? (
        <p className="mb-8 text-center text-ink-soft italic">{note}</p>
      ) : null}
      <ul className="grid gap-5 sm:grid-cols-2">
        {meetings.map((meeting) => (
          <li
            key={`${meeting.name}-${meeting.time}`}
            className="border border-leather/15 bg-cream/80 px-6 py-6 shadow-sm"
          >
            <p className="font-heading text-[0.68rem] tracking-[0.22em] uppercase text-gold-deep">
              {meeting.day} · {meeting.time}
            </p>
            <h3 className="mt-2 font-heading text-xl tracking-[0.08em] uppercase text-ink">
              {meeting.name}
            </h3>
            <p className="mt-2 text-ink-soft leading-relaxed">{meeting.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
