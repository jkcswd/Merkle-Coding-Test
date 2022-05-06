class Time {
  // Private fields to stop inappropriate access from a caller.
  #hours;
  #minutes;
  #seconds;

  constructor(hours, minutes, seconds) {
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;
  }

  #normaliseTime() {
    // Private as not needed apart from internally in class.
    if (this.#seconds > 59) {
      this.#minutes += (this.#seconds - (this.#seconds % 60)) / 60;
      this.#seconds = this.#seconds % 60;
    }

    if (this.#minutes > 59) {
      this.#hours += (this.#minutes - (this.#minutes % 60)) / 60;
      this.#minutes = this.#minutes % 60;
    }

    if (this.#hours > 23) {
      this.#hours = this.#hours % 24;
    }
  }

  scale(addedSeconds) {
    this.#seconds += addedSeconds;
  }

  timeString() {
    this.#normaliseTime();

    return `${this.#hours}:${this.#minutes}:${this.#seconds}`;
  }
}
