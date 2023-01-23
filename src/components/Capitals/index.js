import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
const CapitalDetails = props => {
  const {CountryCapital} = props
  const {capitalDisplayText, id} = CountryCapital
  return (
    <option value={id} className="option-Element">
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {ActiveCapital: countryAndCapitalsList[0].id}

  onClickEvent = event => {
    this.setState({ActiveCapital: event.target.value})
  }

  render() {
    const {ActiveCapital} = this.state
    const filteredCapital = countryAndCapitalsList.filter(
      eachItem => eachItem.id === ActiveCapital,
    )
    console.log(ActiveCapital)
    const {country} = filteredCapital[0]

    return (
      <div className="background-color">
        <div className="white-background">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="search-container">
            <select
              className="select-Element"
              onChange={this.onClickEvent}
              value={ActiveCapital}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <CapitalDetails
                  CountryCapital={eachCountry}
                  key={eachCountry.id}
                />
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="para2">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
