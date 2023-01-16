import {IDocumentFullscreen, IElementFullScreen} from '../types/full-screen-types';

export interface CombinedElement extends HTMLElement, IElementFullScreen {}
export interface CombinedDocument extends Document, IDocumentFullscreen {}

export async function requestFullScreen(element: CombinedElement) {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
  }
  else if (element.webkitRequestFullscreen) {
    await element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    await element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    await element.msRequestFullscreen();
  }
}

export async function exitFullScreen() {
  const doc = document as CombinedDocument;

  if (doc.exitFullscreen) {
    await doc.exitFullscreen();
  }
  else if (doc.mozCancelFullScreen) {
    await doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    await doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    await doc.msExitFullscreen();
  }
}

export function checkFullScreen(){
  const doc = document as CombinedDocument;

  return doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement;
}
