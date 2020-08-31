import React, { Component } from 'react';
import TextBox from '../../components/TextBox/TextBox';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import { getCapsules } from '../../store/actions/ViewCapsuleActions';
import { getHistory } from '../../store/actions/ViewHistoryActions';
import { getRoadster } from '../../store/actions/ViewRoadsterActions';
import userServices from '../../services/userServices';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        isRoadster: false,
        isHistory: false,
        isInfo: false
    };

    _renderInfoHistory = () => {
        console.log('hii');
        return userServices
            .displayHistory()
            .then(response => {
                this.props.getHistory(response.data);
                this.setState({
                    isHistory: true,
                    isInfo: false,
                    isRoadster: false
                });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
    _renderInfo = () => {
        console.log('hii');
        return userServices
            .displayCapsules()
            .then(response => {
                this.props.getCapsules(response.data);
                this.setState({
                    isInfo: true,
                    isRoadster: false,
                    isHistory: false
                });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
    _logout = () => {
        console.log('logout');
        this.props.history.replace('/');
    };
    _renderInfoRoadster = () => {
        console.log('hii');
        return userServices
            .displayRoadster()
            .then(response => {
                console.log(response.data, 'res.data');
                this.props.getRoadster(response.data);
                this.setState({
                    isRoadster: true,
                    isHistory: false,
                    isInfo: false
                });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        console.log(this.state.data, 'this.state.data');
        return (
            <div className='container'>
                <div style={{ color: 'white' }}>
                    <h2 style={{ color: 'black' }}>
                        Click on any box on the right to view info
                    </h2>
                    <Button
                        type='button'
                        className='btn btn-outline-primary'
                        buttonName={'Logout'}
                        style={{
                            backgroundColor: 'rgb(51, 122, 183)',
                            // marginRight: '680px',
                            marginTop: '-56px',
                            marginLeft: '1000px'
                        }}
                        onClick={this._logout}
                    >
                        Logout
                    </Button>

                    <div className='row'>
                        <div className='col-sm-3 col-md-6 col-lg-4'>
                            <TextBox
                                textBoxName='View Capsules'
                                info={this._renderInfo}
                            ></TextBox>
                            <TextBox
                                textBoxName='View History'
                                info={this._renderInfoHistory}
                            ></TextBox>
                            <TextBox
                                textBoxName='View Roadster'
                                info={this._renderInfoRoadster}
                            ></TextBox>
                        </div>
                        <div className='col-sm-9 col-md-6 col-lg-8'>
                            <DisplayBox
                                isHistory={this.state.isHistory}
                                isRoadster={this.state.isRoadster}
                                isInfo={this.state.isInfo}
                                data={this.props.addCapsules.capsules}
                                dataHistory={this.props.addHistory.history}
                                dataRoadster={this.props.addRoadster.roadster}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addUser: state.addUser,
    addCapsules: state.addCapsules,
    addHistory: state.addHistory,
    addRoadster: state.addRoadster
});

const mapDispatchToProps = dispatch => {
    return {
        getCapsules: data => dispatch(getCapsules(data)),
        getHistory: data => dispatch(getHistory(data)),
        getRoadster: data => dispatch(getRoadster(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
