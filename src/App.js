import React, { useState, Fragment } from "react"
import { APP_CONFIG } from "./config"
import "./App.less"

function App() {
    const [showPanel, setShowPanel] = useState(true)
    const [url, setUrl] = useState("")
    const [head, setHead] = useState("default head")
    const handleClick = (url, head) => {
        setShowPanel(true)
        setUrl(url)
        setHead(head)
    }
    return (
        <div className="app">
            <div className="app-head">XLab实验室项目展示</div>
            {showPanel && (
                <Fragment>
                    <div
                        className="app-panel-mask"
                        onClick={setShowPanel.bind(this, false)}
                    ></div>
                    <div className="app-panel">
                        <div className="app-panel-head">
                            {head}
                            <span onClick={setShowPanel.bind(this, false)}>
                                x
                            </span>{" "}
                        </div>
                        <iframe
                            className="app-panel-iframe"
                            src={url}
                            frameborder="0"
                        ></iframe>
                    </div>
                </Fragment>
            )}
            <div className="app-content">
                {APP_CONFIG.map((app, index) => {
                    return (
                        <div
                            className="app-content-item"
                            key={index}
                            onClick={handleClick.bind(this, app.url, app.name)}
                        >
                            <img
                                className="app-content-item-img"
                                src={app.image}
                                alt="image"
                            />
                            <div className="app-content-item-footer">
                                {app.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
