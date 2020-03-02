import React from 'react';
import axios from 'axios';

class Fruits extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '',
      in_season: '',
      list: []
    };
  }

  async componentDidMount() {
    const { color, in_season } = this.state;
    const res = await axios.get(
      `http://localhost:5000/fruits?color=${color}&in_season=${in_season}`
    );
    console.log('HIT!!!!', res.data);
    this.setState({
      list: res.data
    });
  }

  render() {
    const list = this.state.list.map((f, i) => {
      return (
        <div key={i}>
          <p>{f.name}</p>
          <p>{f.colors}</p>
          <p>{f.in_season}</p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default Fruits;
