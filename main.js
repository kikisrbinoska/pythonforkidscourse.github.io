import React from "react";
import { DivWrapper } from "./DivWrapper";
import { Frame } from "./Frame";
import { Header } from "./Header";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import "./style.css";

export const Landing = () => {
    return (
        <div className="landing">
            <div className="div-3">
                <div className="overlap">
                    <div className="bg-LANDING" />
                    <h1 className="h-1">
                        АЈДЕ ЗАЕДНО ВО СВЕТОТ <br />
                        НА <br />
                        ПРОГРАМИРАЊЕ!
                    </h1>
                    <img className="image" alt="Image" src="image.png" />
                    <p className="p">БЕСПЛАТЕН КУРС&nbsp;&nbsp;ЗА PYTHON!</p>
                    <img className="untitled-artwork" alt="Untitled artwork" src="untitled-artwork-1.png" />
                    <img className="element-3" alt="Element" src="1.png" />
                    <img className="element-4" alt="Element" src="1-2.png" />
                    <img className="element-5" alt="Element" src="2.png" />
                    <img className="untitled-design" alt="Untitled design" src="untitled-design.png" />
                    <img className="untitled-design-gttg" alt="Untitled design gttg" src="untitled-design-gttg.png" />
                    <img className="element-6" alt="Element" src="6-1.png" />
                    <img className="untitled-artwork-2" alt="Untitled artwork" src="untitled-artwork-8.png" />
                    <Frame className="frame-2" property1="default" />
                    <img className="group" alt="Group" src="group-1.png" />
                    <PropertyDefaultWrapper className="view" property1="default" />
                    <img className="untitled-artwork-3" alt="Untitled artwork" src="untitled-artwork-5.png" />
                    <DivWrapper
                        className="component-91"
                        img="pattern-2-2.png"
                        img1="image-3.png"
                        imgClassName="design-component-instance-node"
                        pattern="pattern-1-2.png"
                        pattern1="pattern-3-2.png"
                        pattern2="pattern-4-2.png"
                        pattern3="pattern-5-2.png"
                        pattern4="pattern-6-2.png"
                        patternClassName="component-91-instance"
                        text={
                            <>
                                Курс за
                                <br />
                                Python
                            </>
                        }
                    />
                    <Frame className="frame-instance" property1="default" />
                </div>
                <Header className="header-instance" to="/landing" />
                <img className="line" alt="Line" src="line-1.svg" />
            </div>
        </div>
    );
};