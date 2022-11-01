# HTMLEndTagByStartTag

You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note.

In the **HTML syntax**, most elements are written with a start tag and an end tag, with the content in between. An HTML tag is composed of the name of the element, surrounded by angle brackets. An end tag also has a slash after the opening angle bracket. Start tags may incorporate any number of HTML attributes (like a class, an id etc) which are not repeated inside the end tags. Each HTML attribute is described by a string of one of the following formats: `name=value` or just `name`.

## Example

For `startTag = "<button type='button' disabled>"`, the output should be
`solution(startTag) = "</button>"`;
For `startTag = "<i>"`, the output should be
`solution(startTag) = "</i>"`.

## Input/Output

-   [execution-time-limit] 4 seconds (js)

-   [input] string startTag

Guaranteed constraints:
`3 ≤ startTag.length ≤ 75`.

-   [output] string
