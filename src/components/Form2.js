import React from 'react';
import Select from 'react-select';
import { navigate } from "gatsby"

const options = [
  { value: 'shanghai-hongqiao-international-airport', label: '上海虹桥国际机场 - Shanghai Hongqiao International Airport' },
  { value: 'shanghai-pudong-international-airport', label: '上海浦东国际机场 - Shanghai Pudong International Airport' },
  { value: 'sinopec-jinxiu-road', label: '中国石化加油站（锦绣路）- Sinopec, Jinxiu Road' },
  { value: 'xtd-plaza', label: '新天地广场 - XTD Plaza' },
];

class Form extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    navigate(`/locations/${selectedOption.value}/`)
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        placeholder={'Select a location'}
        onChange={this.handleChange}
        options={options}
        clearable={false}
      />
    );
  }
}

export default Form
