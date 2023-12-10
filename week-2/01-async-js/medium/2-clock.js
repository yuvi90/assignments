class Clock {
  constructor(format = "24") {
    if (typeof format !== "string") {
      throw new Error("String required not number !");
    }
    let parsedFormat = parseInt(format);
    if (parsedFormat !== 12 && parsedFormat !== 24) {
      throw new Error("String should be 12 or 24!");
    }
    this.format = format;
    this.start();
  }

  start() {
    setInterval(() => console.log(this.getTime()), 1000);
  }

  getTime() {
    this.seconds = new Date().getSeconds();
    this.minutes = new Date().getMinutes();
    this.hours = new Date().getHours();

    if (this.format === "12") {
      let formattedHours = this.hours !== 12 ? this.hours % 12 : this.hours;
      let time = `${
        formattedHours < 10 ? "0" + formattedHours : formattedHours
      }:${this.minutes < 10 ? "0" + this.minutes : this.minutes}:${
        this.seconds < 10 ? "0" + this.seconds : this.seconds
      } ${this.hours >= 12 ? "PM" : "AM"}`;
      return time;
    }
    let time = `${this.hours < 10 ? "0" + this.hours : this.hours}:${
      this.minutes < 10 ? "0" + this.minutes : this.minutes
    }:${this.seconds < 10 ? "0" + this.seconds : this.seconds}`;
    return time;
  }
}

const myClock = new Clock("12");
