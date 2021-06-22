import React, { Component } from "react";

export default class Time extends Component {
  state = {
    remaining: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isExpired: false,
  };
  timer;
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      now = new Date().getTime(),
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

    this.distance = countDownDate - now;

    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((this.distance % (1000 * 60)) / 1000),
        },
        isExpired: false,
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
      { targetDate, targetTime } = this.props;

    return (
      <>
        {!isExpired && targetDate && targetTime ? (
          // <div className="deals__counter d-flex justify-content-evenly justify-content-md-between text-center">
          <>
            {Object.entries(remaining).map((el, i) => (
              <div key={i} className="deals__counter-entry">
                <div key={el[1]} className="">
                  <span className="deals__counter-value">{el[1]}</span>
                </div>
                <div className="deals__counter-time">{el[0].toUpperCase()}</div>
              </div>
            ))}
          </>
        ) : (
          <p className="alert-danger">Expired</p>
        )}
      </>
    );
  }
}
