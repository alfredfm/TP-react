import React from 'react';

class SnapChatLoader extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <div className={"loader-container pr-2"}>
        <div className={"flexbox justify-content-center align-items-center"}>
          <div className={"btn-loader"}>
            <div className={"large-circle"} style={{borderColor: color}}></div>
            <div className={"small-circle"} style={{borderColor: color}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SnapChatLoader;
