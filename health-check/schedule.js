const schedule = require("node-schedule");
const db = require("./db");
const { checks } = require("./checks");

// execute the health-check script every 5 mintues
const job = schedule.scheduleJob("*/5 * * * *", async () => {
  const entry = { date: new Date().toISOString(), checks: [] };

  entry.checks = await Promise.all(checks.map((check) => new Promise(check)));

  db.get("entries").push(entry).write();
});

job.invoke();
