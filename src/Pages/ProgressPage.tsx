import React, { Component } from "react";
import Progress from "../Components/Progress/Progress";
import Card from "../Components/UI/Card/Card";
import styled from "styled-components";

const StyledProgressPage = styled.div``;

interface Props {}
interface State {
  completed: number;
}

class ProgressPage extends Component<Props, State> {
  private intervalId: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      completed: 0,
    };
    this.intervalId = 0;
  }

  componentDidMount = () => {
    const fn = () => {
      const randomNumber =
        (Math.floor(Math.random() * 20) + this.state.completed) % 100;
      this.setState({
        completed: randomNumber,
      });
    };
    const interval = 1000; // 2 seconds
    this.intervalId = window.setInterval(fn, interval);
  };

  componentWillUnmount = () => {
    if (this.intervalId !== 0) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { completed } = this.state;
    return (
      <StyledProgressPage>
        <Card title="Circular Progress (Indeterminate)">
          <Progress primary />
          <Progress secondary />
          <Progress />
        </Card>
        <Card title="Linear Progress">
          <Progress linear primary completed={completed} />
          <Progress linear secondary completed={completed} />
          <Progress linear completed={50} />
        </Card>
        <Card title="Circular Progress">
          <Progress circular primary completed={completed} />
          {/* <Progress circular secondary completed={30} />
            <Progress circular completed={100} /> */}
        </Card>
      </StyledProgressPage>
    );
  }
}

export default ProgressPage;
