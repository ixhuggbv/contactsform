*** Settings ***
Suite Setup       Connect to Database    pymysql    ${DBName}    ${DBUser}    ${DBPass}    ${DBHost}    ${DBPort}
Suite Teardown    Disconnect From Database
Library           ExtendedSelenium2Library
Library           OperatingSystem
Library           DatabaseLibrary

*** Variables ***
${DBName}         records
${DBUser}         root
${DBPass}         Dfn37w112!
${DBHost}         127.0.0.1
${DBPort}         3306
${Browser}        Firefox
${SiteUrl}        http://localhost:3000
${Delay}          5s

*** Test Cases ***
LoginTest
    Open Browser to the Webpage
    Click Add Contact
    Enter Name    James
    Enter Email    james@james.com
    Enter Add_1    1 Grove Street
    Enter Add_2    Lawcombe
    Enter Town    Swansea
    Enter Postcode    SA1 3SE
    Enter Phone    01234765098
    Enter DOB    1985-02-01
    Assert Save Button Enabled
    Click Save
    Check If Exists In DB - James
    [Teardown]    Close Browser

*** Keywords ***
Open Browser to the Webpage
    open browser    ${SiteUrl}    ${Browser}

Click Add Contact
    Click Element    add_contact

Enter Name
    [Arguments]    ${Name}
    Input Text    add_contact_name    ${Name}

Enter Email
    [Arguments]    ${Email}
    Input Text    add_contact_email    ${Email}

Enter Add_1
    [Arguments]    ${Add_1}
    Input Text    add_contact_add_1    ${Add_1}

Enter Add_2
    [Arguments]    ${Add_2}
    Input Text    add_contact_add_2    ${Add_2}

Enter Town
    [Arguments]    ${Town}
    Input Text    add_contact_town    ${Town}

Enter Postcode
    [Arguments]    ${Postcode}
    Input Text    add_contact_postcode    ${Postcode}

Enter Phone
    [Arguments]    ${Phone}
    Input Text    add_contact_phone    ${Phone}

Enter DOB
    [Arguments]    ${DOB}
    Input Text    add_contact_dob    ${DOB}

Assert Save Button Enabled
    Element Should Be Enabled    add_contact_save

Click Save
    Click Element    add_contact_save

[Teardown]
    Close Browser

Check If Exists In DB - James
    Check If Exists In Database    SELECT id FROM contacts WHERE Name = 'James';

Fill Out Form
