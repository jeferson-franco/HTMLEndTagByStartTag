const solution = require('./HTMLEndTagByStartTag.js');

test('test 1', () => {
    expect(solution("<button type='button' disabled>")).toBe('</button>');
});

test('test 2', () => {
    expect(solution('<i>')).toBe('</i>');
});

test('test 3', () => {
    expect(solution("<div id='my_area' class='data' title='This is a test for title on Div tag'>")).toBe('</div>');
});

test('test 4', () => {
    expect(solution('<html>')).toBe('</html>');
});

test('test 5', () => {
    expect(solution("<TABLE border='1'>")).toBe('</TABLE>');
});

test('test 6', () => {
    expect(solution("<li class='test'>")).toBe('</li>');
});
