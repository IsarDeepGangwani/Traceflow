class AvailiabilityPage {

    // Locators
    profileIcon_Locator = "a[href='/profile']"
    Availiability_Locator = 'a[href="/trace/availabilities"]'
    // {Set up the widest range of working hours you might possibly take a booking. 
    // Your availability will appear to users. Make sure you can accept bookings at these times.} > Label1
    label1_Locator = '.mb-10'
    // fromTime_Locator = '.space-y-1 > div > div.flex.flex-row.items-center.space-x-2 > div:nth-child(1) > div'
    // toTime_Locator = '.space-y-1 > div > div.flex.flex-row.items-center.space-x-2 > div:nth-child(3) > div'
    checkBox_Locator = '[type="checkbox"]'
    timingDropdown_Locator = '.MuiInput-input'
    AddMoreTimingSlotBtn_Locator = '.font-thin.cursor-pointer'
    deleteTimingSlotBtn_Locator = ' button.w-4.h-4.cursor-pointer'
    addTimesOffBtn_Locator = '.items-start > button'
    calendarNextMonth_Locator = '.react-calendar__navigation__next-button'
    calendarPrevMonth_Locator = '.react-calendar__navigation__prev-button'
    calenderLog_Locator = '.react-calendar__viewContainer'
    saveAddTimesOffBtn_Locator = '.px-4.h-8'






    selectWeeklyHours() {

        const profile = cy.get(this.profileIcon_Locator).click()
        const AvailiabilityTab = cy.get(this.Availiability_Locator).should('exist').click()
        const label1 = cy.get(this.label1_Locator).invoke('text').then((txt) => {
            cy.log(txt)
        })

        const weeklyLabel = cy.contains('Weekly Hours').then((txt) => {
            cy.log(txt)
        })
        const checkAlldays = cy.get(this.checkBox_Locator).check().uncheck()
        

        const To_timingDropdown = cy.get(this.timingDropdown_Locator).first().click()
        const allAvailableTimings_in_To_Field = cy.get('li').each(($time) => {
            cy.log('Available times in To fileld ==', $time.text())
        })
        const selectTiming_in_To_Field = cy.get('li').contains("04:00 AM").wait(1000).click({ force: true })

        const From_timingDropdown = cy.get(this.timingDropdown_Locator).eq(1).click()
        const allAvailableTimings_in_From_Field = cy.get('li').each(($time) => {
            cy.log('Available times in From fileld ==', $time.text())
        })
        const selectTiming_in_From_Field = cy.get('li').contains("09:00 AM").wait(1000).click({ force: true })

        const AddMoreTimingSlot = cy.get(this.AddMoreTimingSlotBtn_Locator).eq(0).click()
        const deleteTimingSlot = cy.get(this.deleteTimingSlotBtn_Locator).eq(1).click()

        const synchronize = cy.contains('Synchronize').click().wait(1000).click({ force: true })


    }





    addTimesOff() {


        const addTimesOffBtn = cy.get(this.addTimesOffBtn_Locator)
            .should('have.text', 'Add Times off').click({ force: true })

        const calendarNextMonth = cy.get(this.calendarNextMonth_Locator).click({ force: true })
        const calendarPrevMonth = cy.get(this.calendarPrevMonth_Locator).click({ force: true })

        const calenderdetails = cy.get(this.calenderLog_Locator).then(($cal) => {
            cy.log($cal.text())
        })
        const selectDate = cy.get(this.calenderLog_Locator).contains('20').click({ force: true })
        cy.wait(1000)

        if (cy.get(this.deleteTimingSlotBtn_Locator), 'exist') {

            cy.get(this.deleteTimingSlotBtn_Locator).dblclick({ force: true })


        }

        const slectavailableHours_in_To_Field = cy.get(this.timingDropdown_Locator).eq(0).click({ force: true })
        cy.get('li').each(($time) => {
            cy.log($time.text())
        })
        const AvailibityTiming_in_To_Filed = cy.get('li').contains("02:00 PM").wait(1000).click({ force: true })

        const slectavailableHours_in_From_Field = cy.get(this.timingDropdown_Locator).eq(1).click({ force: true })
        cy.wait(1000)
        cy.get('li').each(($time) => {
            cy.log($time.text())


        })
        const AvailibityTiming_in_From_Filed = cy.get('li').contains("06:00 PM").click({ force: true })

        const addExtraTimeSlot = cy.get(this.AddMoreTimingSlotBtn_Locator).click({ force: true })
        const delete_TimingSlot = cy.get(this.deleteTimingSlotBtn_Locator).eq(1).click({ force: true })

        const saveAddTimesOffBtn = cy.get(this.saveAddTimesOffBtn_Locator).eq(1).should('be.visible').click({ force: true })

        cy.wait(1000)
        const deleteTimesOffBtn = cy.get(this.deleteTimingSlotBtn_Locator).eq(1).dblclick({ force: true })

        const saveAvailabilityBtn = cy.get('button').contains('Save').click({ force: true })

        cy.wait(1500)







    }








} export default AvailiabilityPage