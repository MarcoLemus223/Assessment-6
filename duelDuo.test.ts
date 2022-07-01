
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

beforeEach(async () => {
   await driver.get('http://localhost:3000')
})

afterEach(async () => {
    await driver.sleep(6000)
})

test('show choices', async () => {
    const choice = await driver.findElement(By.id('choices'))
    const displayed = await choice.isDisplayed()
    expect(displayed).toBe(true)
})

beforeEach(async () => {
    await driver.get('http://localhost:3000')
})

afterEach(async () => {
    await driver.sleep(6000)
})

test('add duo', async () => {
    const player = await driver.findElement(By.id('player-duo'))
    const displayed = await player.isDisplayed()
    expect(displayed).toBe(true)
})