import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {

  const helperFunction = (name) => {
    return name.toUpperCase()
  }
  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3>Name: ${helperFunction(brick.LegoName)}</h3>
              <p>${brick.LegoId}</p>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              <p>${brick.Notes}</p>
              </section>
              `;
  const link = brick.ColorstreamLinkImage;
  if (link) {
    //true? wrap the block in an a tag
    return `
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>`;
  } else {
    //false? return the block
    return block;
  }
}