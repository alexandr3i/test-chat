# My Tasks

A dependency-free task list with a turquoise accent and light/dark themes.

- Optional due dates and times, custom categories, and task priorities.
- Completed tasks move to the Completed tab and can be restored to To do.
- Separate collapsible panels for filters and sorting.
- Combine category, priority, date range, and time range filters. Time ranges apply to each selected day.
- Sort by date/time, category, priority, or newest first. Undated tasks appear last when sorting by date.
- Tasks, categories, and theme preferences are saved in this browser's localStorage. Existing tasks from earlier versions are preserved.

Dates and times are local. There are no notifications, accounts, or cross-device synchronization.

## Run locally

Requires Node.js 18 or newer. No dependency installation is needed.

```sh
cd /workspace/test-chat
npm start
```

The server listens on port 3000 by default. Set `PORT` to use another port. The app can also be hosted as a static site using `index.html`, including on GitHub Pages.
