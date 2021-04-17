import React from 'react'
import "./SocialHubHeader.css"
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';


function SocialHubHeader() {
    return (
        <div>
            <div className="Social_Header2">
                <ButtonGroup size="large" aria-label="large outlined button group">
                    <Button> <h3>Discussions</h3></Button>
                    <Button><h3>Admin Blog</h3></Button>
                    <Button><h3>Exam Guidence</h3></Button>
                    <Button><h3>Latest News</h3></Button>
                    <Button><h3>University Finder</h3></Button>
                </ButtonGroup>
            </div>
            
        </div>
    )
}

export default SocialHubHeader