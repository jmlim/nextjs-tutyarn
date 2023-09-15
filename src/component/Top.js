import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "1000px 0 0" }}>
          <img
            src="/images/jmlim.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
          <Header as="h1">임정묵</Header>
          <Gnb />
        </div>
      </div>
    </div>
  );
}
