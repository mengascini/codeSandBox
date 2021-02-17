import React from "react";
import WAVEFORMS from "./waveForms.js";
import Frequency from "./Frequency.js";

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency: 250,
      duration: 500
    };
  }

  setWaveform = (e) => {
    this.setState({ waveform: e.target.value });
  };
  setDuration = (e) => {
    this.setState({ duration: e.target.value });
  };
  setFrequency = (value) => {
    this.setState({ frequency: value });
  };
  playSound = () => {
    this.props.makeSound(
      this.state.waveform,
      this.state.frequency,
      this.state.duration
    );
  };
  render() {
    return (
      <div>
        <h1>Synthesizer</h1>
        <p>Choose from the options below</p>

        <div className="control">
          <label htmlFor="waveform">Waveform</label>
          <select
            id="waveform"
            value={this.state.waveform}
            onChange={this.setWaveform}
          >
            <option value={WAVEFORMS.SINE.id}>{WAVEFORMS.SINE.userTerm}</option>
            <option value={WAVEFORMS.SAWTOOTH.id}>
              {WAVEFORMS.SAWTOOTH.userTerm}
            </option>
            <option value={WAVEFORMS.TRIANGLE.id}>
              {WAVEFORMS.TRIANGLE.userTerm}
            </option>
            <option value={WAVEFORMS.SQUARE.id}>
              {WAVEFORMS.SQUARE.userTerm}
            </option>
          </select>
        </div>

        <Frequency
          value={this.state.frequency}
          updateFrequency={this.setFrequency}
        />

        <div className="control">
          <label htmlFor="duration">Duration (milliseconds)</label>
          <input
            id="duration"
            type="text"
            value={this.state.duration}
            onChange={this.setDuration}
          />
        </div>

        <button onClick={this.playSound}>Play!</button>
      </div>
    );
  }
}

export default Synthesizer;
