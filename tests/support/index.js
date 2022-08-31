
async function log(asyncCall) {
    await asyncCall;
}

async function isTrue(asyncCall) {
    expect(await asyncCall).toBeTruthy()
}

async function isFalse(asyncCall) {
    expect(await asyncCall).toBeFalsy()
}

async function hasText(asyncCall, expectedValue) {
    expect(await asyncCall).toEqual(expectedValue)
}

function testNotImplemented() {
    throw Error("Test is not implemented!");
}

module.exports = { log, isTrue, isFalse, hasText, testNotImplemented }