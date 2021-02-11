import React, { Component } from "react";
import Progress from "../Components/Elements/Progress/Progress";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
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
        <ContentBox title="Circular Progress (Indeterminate)">
          <Progress primary />
          <Progress secondary />
          <Progress />
        </ContentBox>
        <ContentBox title="Linear Progress">
          <Progress linear primary completed={completed} />
          <Progress linear secondary completed={completed} />
          <Progress linear completed={50} />
        </ContentBox>
        <ContentBox title="Circular Progress">
          <Progress circular primary completed={completed} />
          {/* <Progress circular secondary completed={30} />
            <Progress circular completed={100} /> */}
        </ContentBox>
      </StyledProgressPage>
    );
  }
}

export default ProgressPage;
