import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (totalFeedback, option) => totalFeedback + this.state[option],
      0,
    );
  };

  countPositiveFeedbackPercentage = () => {
    const resultPercentage =
      this.countTotalFeedback() === 0
        ? 0
        : Math.round((100 / this.countTotalFeedback()) * this.state.good);

    return `${resultPercentage}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arrOptions = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={arrOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
