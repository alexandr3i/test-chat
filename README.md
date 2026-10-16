# My Tasks

A dependency-free task list with a turquoise accent and light/dark themes.

- Monthly calendar with previous/next month navigation, a Today button, and an optional List view.
- Add tasks directly with the + button on a day; click a task title to edit its text, date, time, category, priority, or completion status.
- Drag tasks onto another day to reschedule while preserving their time. Drag undated tasks onto the calendar, or drop scheduled tasks in Unscheduled to clear their date and time. On touch screens, tap a task and edit its date instead.
- Global search across task titles and categories, including tasks outside the displayed month. Search results use a list across all dates and respect the selected status and filters.
- Optional due dates and times, custom categories, and task priorities. Categories can also be created inside the task editor.
- Completed tasks move to the Completed tab and can be restored to To do.
- Separate collapsible panels for filters and sorting.
- Combine category, priority, date range, and time range filters. Time ranges apply to each selected day.
- Sort by date/time, category, priority, or newest first. In the calendar, sorting orders tasks within each day. Undated tasks appear last when sorting the list by date.
- Task actions preserve page scroll and do not move focus to the add form.
- Tasks, categories, and theme preferences are saved in this browser's localStorage. Existing tasks from earlier versions are preserved.

Dates and times are local. There are no notifications, accounts, or cross-device synchronization.

## Run locally

Requires Node.js 18 or newer. No dependency installation is needed.

```sh
cd /workspace/test-chat
npm start
```

The server listens on port 3000 by default. Set `PORT` to use another port. The app can also be hosted as a static site using `index.html`, including on GitHub Pages.
