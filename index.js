const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes, removeNote } = require("./notes.controller");
yargs.version(pkg.version);
yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "note title",
      demandOptions: true,
    },
  },
  handler({ title }) {
    console.log("add comment", title);
    addNote(title);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: "string",
      describe: "note id",
      demandOptions: true,
    },
  },
  handler({ id }) {
    removeNote(id);
  },
});
yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.parse();
