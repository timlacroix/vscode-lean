/* Some svgs copied from vscode-codicons.

[note] soon this won't be needed hopefully: https://github.com/microsoft/vscode/issues/95199

[todo] Licence:
https://github.com/microsoft/vscode-codicons/blob/master/LICENSE

*/

import * as React from 'react';
import * as c2cimg from '../media/copy-to-comment-light.svg';

function Svg(props: {src: {attributes: {}; content: string}}) {
    const {src} = props;
    if (!src) {return null}
    const {attributes, content} = src;
    return <svg {...attributes} width="16" height="16" dangerouslySetInnerHTML={{__html: content}}/>
}

export function CopyToCommentIcon(): JSX.Element {
    return <Svg src={c2cimg}/>
}

export function PinIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.418 4.5l-.866-.375-1.459 1.46-4.016-.649a2.97 2.97 0 0 0-.94-1.322A2.893 2.893 0 0 0 6.65 3l-.498.498.055 3.818L.5 7.309l1.036 1.036h4.691l.041 3.355.518.518a2.71 2.71 0 0 0 2.36-1.868l4.002-.525 1.5 1.5.852-.348-.082-6.477zm-1.725 4.452l-.436-.15-4.514.6-.389.307a2.507 2.507 0 0 1-1.063 1.377V8.36l-.055-4.186c.513.335.9.831 1.098 1.411l.402.32 4.534.73.423-.136.784-.784.055 4.036-.839-.798z"/></svg>
}
export function PinnedIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.84 1l-.91.36V3.5L5.51 5.97a3.08 3.08 0 0 0-1.66-.28 3 3 0 0 0-1.54.64v.73l2.84 2.76L.96 14h1.52l3.44-3.44 2.49 2.43h.76a2.81 2.81 0 0 0 .36-3.1l2.55-3.32h2.2l.37-.88L9.84 1zm2 4.53l-.43.21-2.87 3.75-.06.51a2.6 2.6 0 0 1 .23 1.79l-2-2-.76-.74L3.6 6.76a2.85 2.85 0 0 1 1.84.23l.53-.06 3.86-2.79.21-.41V2.58l3 2.92-1.2.03z"/></svg>
}

export function PauseIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.5 3H6v10H4.5V3zm7 0v10H10V3h1.5z"/></svg>
}

export function ContinueIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M2.5 2H4v12H2.5V2zm3.5.18V14l9-5.938-9-5.881zm6.315 5.882L7.5 5v6.18l4.815-3.118z"/></svg>
}

export function RefreshIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M5.563 2.516A6.001 6.001 0 0 0 8 14 6 6 0 0 0 9.832 2.285l-.302.953A5.002 5.002 0 0 1 8 13a5 5 0 0 1-2.88-9.088l.443-1.396z"/><path fillRule="evenodd" clipRule="evenodd" d="M5 3H2V2h3.5l.5.5V6H5V3z"/></svg>
}

export function GoToFileIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M8.06 3.854L6 5.914 5.914 6l-.707-.707L6.5 4h-3a1.5 1.5 0 0 0 0 3H4v1h-.5a2.5 2.5 0 1 1 0-5h3L5.207 1.707 5.914 1l2.147 2.146v.708zM8.329 2H10v4h4v7H6V7.347L5 6.5v7l.5.5h9l.5-.5V5l-.1-.4-3.4-3.5-.3-.1H7.328l1 1zm5.575 3L11 2v3h2.903z"/></svg>
}

export function ClippyIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.992H4v-9h8v2h1v-2.5l-.5-.5H11v-1h-1a2 2 0 0 0-4 0H4.94v1H3.5l-.5.5v10l.5.5H7v-1zm0-11.2a1 1 0 0 1 .8-.8 1 1 0 0 1 .58.06.94.94 0 0 1 .45.36 1 1 0 1 1-1.75.94 1 1 0 0 1-.08-.56zm7.08 9.46L13 13.342v-5.35h-1v5.34l-1.08-1.08-.71.71 1.94 1.93h.71l1.93-1.93-.71-.71zm-5.92-4.16h.71l1.93 1.93-.71.71-1.08-1.08v5.34h-1v-5.35l-1.08 1.09-.71-.71 1.94-1.93z"/></svg>;
}

export function DoSuggestIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <g transform="matrix(0.0604606,0,0,0.0604606,-0.66259039,-9.0588739)">
            <path d="m 266.60061,311.86226 c 0,5.73198 -1.6255,12.10559 -4.87648,19.12085 -3.9354,8.46956 -10.694,13.90209 -20.27578,16.2976 -4.87642,1.1977 -7.78515,1.79654 -8.72617,1.79654 h -54.53921 c -0.85549,1.79657 -2.22431,4.49145 -4.10647,8.08465 -9.15404,17.02472 -23.0134,31.61126 -41.57808,43.75962 -13.00384,8.46962 -21.47343,12.70443 -25.40877,12.70443 -3.84981,0 -5.77471,-1.9677 -5.77471,-5.90311 0,-1.19769 1.5399,-5.09029 4.61969,-11.67781 2.39551,-5.13303 4.57708,-10.82221 6.54472,-17.06752 3.50766,-11.12168 5.26149,-21.08843 5.26149,-29.90026 H 59.736771 c -0.171073,0 -2.566518,-0.47054 -7.186334,-1.41162 -7.956283,-1.62544 -14.458204,-6.03135 -19.505763,-13.21775 -4.790889,-6.75853 -7.186334,-14.32984 -7.186334,-22.71392 V 210.61198 c 0,-1.36883 0.470541,-4.40589 1.411624,-9.11118 1.711032,-8.64076 5.793752,-15.58946 12.248159,-20.84612 6.463898,-5.26614 14.101762,-7.89922 22.913591,-7.89922 H 230.02724 c 2.90878,0 6.97249,0.76995 12.19112,2.30985 11.54949,3.42207 18.99248,11.16448 22.32901,23.22724 1.36883,4.96202 2.05324,9.02573 2.05324,12.19112 z m -10.13788,-4.74809 V 212.4086 c 0,-16.34037 -6.84413,-26.17881 -20.53239,-29.51534 -3.16545,-0.76995 -5.13316,-1.15492 -5.9031,-1.15492 H 62.431714 c -1.283289,0 -3.807068,0.51331 -7.571339,1.53992 -6.159714,1.71104 -10.950603,5.47531 -14.372667,11.29281 -2.994321,5.1331 -4.491481,11.12171 -4.491481,17.96584 v 94.44896 c 0,9.41064 2.628327,16.89641 7.884982,22.45731 5.266206,5.56084 12.604631,8.34126 22.015276,8.34126 h 62.367155 v 7.57134 c 0,7.35741 -1.79656,17.28139 -5.3897,29.77195 -3.76434,13.34605 -7.74251,22.37172 -11.93451,27.07701 12.14835,-3.67867 23.99726,-11.42108 35.54675,-23.22723 11.54942,-11.80609 18.90683,-23.78332 22.07222,-35.93167 0.59888,-2.30991 1.19775,-4.0637 1.79663,-5.2614 h 56.20744 c 16.76805,0 26.5209,-8.42683 29.25855,-25.28047 0.4278,-2.65212 0.64171,-4.44871 0.64171,-5.3898 z"/>
            <circle cx="84.400742" cy="261.02704" r="16.466658" />
            <circle cx="146.22667" cy="261.02704" r="16.466658" />
            <circle cx="206.19376" cy="261.02704" r="16.466658" />
        </g>
   </svg>
}


export function DoNotSuggestIcon(): JSX.Element {
    return <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <g transform="matrix(0.0604606,0,0,0.0604606,-0.66259039,-9.0588739)">
            <path d="m 266.60061,311.86226 c 0,5.73198 -1.6255,12.10559 -4.87648,19.12085 -3.9354,8.46956 -10.694,13.90209 -20.27578,16.2976 -4.87642,1.1977 -7.78515,1.79654 -8.72617,1.79654 h -54.53921 c -0.85549,1.79657 -2.22431,4.49145 -4.10647,8.08465 -9.15404,17.02472 -23.0134,31.61126 -41.57808,43.75962 -13.00384,8.46962 -21.47343,12.70443 -25.40877,12.70443 -3.84981,0 -5.77471,-1.9677 -5.77471,-5.90311 0,-1.19769 1.5399,-5.09029 4.61969,-11.67781 2.39551,-5.13303 4.57708,-10.82221 6.54472,-17.06752 3.50766,-11.12168 5.26149,-21.08843 5.26149,-29.90026 H 59.736771 c -0.171073,0 -2.566518,-0.47054 -7.186334,-1.41162 -7.956283,-1.62544 -14.458204,-6.03135 -19.505763,-13.21775 -4.790889,-6.75853 -7.186334,-14.32984 -7.186334,-22.71392 V 210.61198 c 0,-1.36883 0.470541,-4.40589 1.411624,-9.11118 1.711032,-8.64076 5.793752,-15.58946 12.248159,-20.84612 6.463898,-5.26614 14.101762,-7.89922 22.913591,-7.89922 H 230.02724 c 2.90878,0 6.97249,0.76995 12.19112,2.30985 11.54949,3.42207 18.99248,11.16448 22.32901,23.22724 1.36883,4.96202 2.05324,9.02573 2.05324,12.19112 z m -10.13788,-4.74809 V 212.4086 c 0,-16.34037 -6.84413,-26.17881 -20.53239,-29.51534 -3.16545,-0.76995 -5.13316,-1.15492 -5.9031,-1.15492 H 62.431714 c -1.283289,0 -3.807068,0.51331 -7.571339,1.53992 -6.159714,1.71104 -10.950603,5.47531 -14.372667,11.29281 -2.994321,5.1331 -4.491481,11.12171 -4.491481,17.96584 v 94.44896 c 0,9.41064 2.628327,16.89641 7.884982,22.45731 5.266206,5.56084 12.604631,8.34126 22.015276,8.34126 h 62.367155 v 7.57134 c 0,7.35741 -1.79656,17.28139 -5.3897,29.77195 -3.76434,13.34605 -7.74251,22.37172 -11.93451,27.07701 12.14835,-3.67867 23.99726,-11.42108 35.54675,-23.22723 11.54942,-11.80609 18.90683,-23.78332 22.07222,-35.93167 0.59888,-2.30991 1.19775,-4.0637 1.79663,-5.2614 h 56.20744 c 16.76805,0 26.5209,-8.42683 29.25855,-25.28047 0.4278,-2.65212 0.64171,-4.44871 0.64171,-5.3898 z"/>
            <circle cx="84.400742" cy="261.02704" r="16.466658" />
            <circle cx="146.22667" cy="261.02704" r="16.466658" />
            <circle cx="206.19376" cy="261.02704" r="16.466658" />
        </g>
        <path d="M 15.888 0.838 L 0.853 15.884 C 0.853 15.884 0.145 15.178 0.145 15.178 L 15.18 0.132 Z"/>
     </svg>
}

