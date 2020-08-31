import React, { Component } from 'react';

export default class DisplayBox extends Component {
    render() {
        console.log(this.props.data, 'data');
        const {
            data,
            dataHistory,
            dataRoadster,
            isHistory,
            isRoadster,
            isInfo
        } = this.props;
        return (
            <div>
                <div>hgvdsjhbndkxsjnxkasx</div>
                <div className='form-group'>
                    <label for='exampleFormControlTextarea1'>
                        Large textarea
                    </label>
                    <div
                        className='card'
                        style='width: 18rem;'
                        style={{ backgroundColor: ' #337ab7' }}
                    >
                        <div
                            className='card-body'
                            style={{ marginTop: '60px', height: '650px' }}
                        >
                            <h5 className='card-title'>Data title</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>
                                Data subtitle
                            </h6>
                            <p className='card-text'>
                                {isHistory === false && isRoadster === false
                                    ? data.map((value, index) => {
                                          return (
                                              <ul>
                                                  <li>{value.details}</li>
                                              </ul>
                                          );
                                      })
                                    : null}
                                {isInfo === false && isRoadster === false
                                    ? dataHistory.map((value, index) => {
                                          return (
                                              <ul>
                                                  <li>{value.details}</li>
                                              </ul>
                                          );
                                      })
                                    : null}
                                {isHistory === false && isInfo === false ? (
                                    // ? dataRoadster.map((value, index) => {
                                    //   return (
                                    <ul>
                                        <li>{dataRoadster.details}</li>
                                    </ul>
                                ) : //   );
                                //   })
                                // : null
                                // }
                                null}
                            </p>
                            <a href='#' className='card-link'>
                                Data link
                            </a>
                            <a href='#' className='card-link'>
                                Data Another link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
