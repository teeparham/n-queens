import React from 'react'
import Board from './Board'
import Loading from './Loading'

type State = { nQueens: number };

export default class Container extends React.Component<{}, State> {
  state = { nQueens: 1 };

  increment(delta: number) {
    this.setState(state => {
      let n = state.nQueens + delta;
      if (n < 1) { n = 1 }
      return { nQueens: n }
    });
  }

  render() {
    return(
      <div>
        <Loading n={this.state.nQueens} />
        <div className="db mv2">
          <span className="pointer br-pill ba bw2 ph4 pv3 mb2 ml1 mr3 dib v-mid white b f2 bg-green usn"
                onClick={() => this.increment(1)} >+</span>
          <span className="pointer br-pill ba bw2 ph4 pv3 mb2 mh1 dib v-mid white b f2 bg-red usn"
                onClick={() => this.increment(-1)} >-</span>
        </div>
        <Board nQueens={this.state.nQueens} />
      </div>
    );
  }
}

