import { AppShell, Header, Navbar } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <AppShell
      padding="md"
      // navbar={
      //   // <Navbar width={{ base: 300 }} height={500} p="xs">
      //   //   {/* Navbar content */}
      //   // </Navbar>
      // }
      header={
        <Header height={60} p="xs">
          <h1 className="text-3xl font-bold underline">It Ticket Tracker</h1>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {" "}
      <div className="App"></div>
    </AppShell>
  );
}

export default App;
