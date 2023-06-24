import {surpriseMePrompts} from '../constant'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    return randomPrompt;
    if(randomPrompt === prompt) return getRandomPrompt(prompt);
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}