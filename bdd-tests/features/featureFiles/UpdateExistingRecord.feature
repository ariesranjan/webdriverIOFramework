Feature: Updating existing computer details

Scenario: User is able to update name of existing computer

    Given I open the application "http://computer-database.herokuapp.com/computers" url
    Then I should see "FilterByName" element is present
    When I click on "AddANewComputer" element
    Then I should see "CreateThisComputer" element is present
    When I enter "T330" in "ComputerName" field
    And I enter "1988-12-12" in "IntroducedDate" field
    And I enter "1999-12-12" in "DiscontinuedDate" field
    And I select "Lenovo Group" from "CompanyDropdown" drop down
    And I click on "CreateThisComputer" element
    Then I should see "ConfirmationText" same as "Done! Computer T330 has been created"
    When I enter "T330" in "SearchField" field
    And I click on "FilterByName" element
    And I click on "NameOfComputerInSearchTable" element
    Then I should see "EditPageHeading" same as "Edit computer"
    When I enter "T331" in "ComputerName" field
    And I click on "SaveThisComputer" element
    Then I should see "ConfirmationText" same as "Done! Computer T331 has been updated"
    When I enter "T331" in "SearchField" field
    And I click on "FilterByName" element
    Then I should see "NameOfComputerInSearchTable" same as "T331"
