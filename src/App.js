import React, { useState, Fragment } from "react"
import { APP_CONFIG } from "./config"
import { svgGithub, svgDoc, svgLab, svgClose, svgLink } from "./icons"
import "./App.less"

function App() {
    const [showPanel, setShowPanel] = useState(false)
    const [url, setUrl] = useState("")
    const [head, setHead] = useState("default head")
    const handleClick = (url, head) => {
        setShowPanel(true)
        setUrl(url)
        setHead(head)
    }
    return (
        <div className="app">
            <div className="app-head">
                <div className="app-head-text">{svgLab}XLab实验室项目展示</div>
                <div className="app-head-icon-group">
                    <a
                        className="app-head-icon"
                        href="https://github.com/WHU-X-Lab"
                        target="_blank"
                    >
                        {svgGithub}Github
                    </a>
                    <a
                        className="app-head-icon"
                        href="https://www.yuque.com/vzbnx0"
                        target="_blank"
                    >
                        {svgDoc}语雀空间
                    </a>
                </div>
            </div>
            {showPanel && (
                <Fragment>
                    <div
                        className="app-panel-mask"
                        onClick={setShowPanel.bind(this, false)}
                    ></div>
                    <div className="app-panel">
                        <div className="app-panel-head">
                            <div className="app-panel-head-icon-group">
                                <a href={url}>
                                    <div className="app-panel-head-icon">
                                        {svgLink}
                                    </div>
                                </a>

                                <div
                                    className="app-panel-head-icon"
                                    onClick={setShowPanel.bind(this, false)}
                                >
                                    {svgClose}
                                </div>
                            </div>
                            <span className="app-panel-head-text">{head}</span>
                        </div>
                        <iframe
                            className="app-panel-iframe"
                            src={url}
                            frameBorder="0"
                        ></iframe>
                    </div>
                </Fragment>
            )}
            <div className="app-content">
                {APP_CONFIG.map((app, index) => {
                    return (
                        <div className="app-content-item" key={index}>
                            <img
                                className="app-content-item-img"
                                src={app.image}
                                alt="image"
                                onClick={handleClick.bind(
                                    this,
                                    app.url,
                                    app.name
                                )}
                            />
                            <div className="app-content-item-footer">
                                {app.name}
                                <a href={app.repo}>{svgGithub}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
