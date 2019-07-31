import React from 'react';
import Select from 'react-select';
import { navigate } from "gatsby"

const options = [
  { value: 'lilacs-international-commercial-center', label: '丁香国际商业中心 - Lilacs International Commercial Center' },
  { value: 'intime-hangzhou', label: '杭州银泰百货 - Intime Hangzhou' },
  { value: 'k11-art-mall', label: 'K11 Art Mall' },
  { value: 'peoples-square', label: '人民广场 - People\'s Square' },
  { value: 'shanghai-hongqiao-international-airport', label: '上海虹桥国际机场 - Shanghai Hongqiao International Airport' },
  { value: 'shanghai-international-commerce-center', label: '上海环贸广场 - ICC (Shanghai International Commerce Center)' },
  { value: 'shanghai-pudong-international-airport', label: '上海浦东国际机场 - Shanghai Pudong International Airport' },
  { value: 'xtd-plaza', label: '新天地广场 - XTD Plaza' },
  { value: 'sinopec-jinxiu-road', label: '中国石化加油站（锦绣路）- Sinopec, Jinxiu Road' },
  { value: 'cnpc-wuzhong-road', label: '中国石油加油站（吴中路）- CNPC, Wuzhong Road' },
  { value: 'unielite-shopping-mall', label: '中海环宇荟 - UniElite Shopping Mall' },
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
