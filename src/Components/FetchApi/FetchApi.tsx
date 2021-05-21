import React, { Component } from "react";
import axios from "axios";

interface Props {}

interface State<DataItem> {
  searchParams: string;
  data: DataItem[];
  errMsg: string;
}
class FetchApi extends Component<Props, State<any>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchParams: "",
      data: [],
      errMsg: "",
    };
  }

  async getData() {
    await axios
      .get("https://imdb8.p.rapidapi.com/title/find", {
        params: { q: this.state.searchParams },
        headers: {
          "x-rapidapi-key":
            "bf9c805b23msh91609a5a1732925p107546jsn0ff96b60aaeb",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      })
      .then((response) => {
        this.setState({ ...this.state, data: response.data.results });
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }
  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, searchParams: event.target.value });
  };

  render() {
    return (
      <div>
        <input placeholder="Search movie" onChange={this.handleSearchChange} />
        <div>
          {this.state.data.map((values, key) => {
            return <label key={key}>{values.title}</label>;
          })}
        </div>
      </div>
    );
  }
}

export default FetchApi;
