# Notes

## What goes in the crime entry fields?
- **Address**: The address of the crime. This may be a street name, a cross street, or a general area. Ability to drop a pin on the map to log in addition to manual entry.
- **Date**: The date of the crime.
- **Time**: The time of the crime, if known. Best guess is okay.
- **Classification**: The category of crime committed.
- **Tags**: The keywords that best describe the crime, for filtering purposes.
- **Description**: A description of the crime. This may be a narrative, a list of items stolen, potential motives, methods used, or a list of suspects.
- **Suspects**: A list of suspects, if known. This may be a list of names, a list of vehicles, or a list of license plates.
- **Witnesses**: A list of witnesses, if known. This may be a list of names, or other contact or descriptive data.
- **Victims**: A list of victims, if known. This may be a list of names, or other contact or descriptive data.
- **Links**: Any links to news articles or other source of information about the crime.
- **Image**: An image of the crime, if available. This may be a photo of the crime scene, a photo of the suspect, or a photo of the victim.
- **Case handled by LE?**: If LE have taken on the case. [Yes, No, Unknown, Dropped, Solved]


### Feedback:
- Autocompletion? If so, what fields?
- Have newer user's entries be filtered by a higher-up for verification
- Have a "verified" field for entries that have been verified by a higher-up
- Way to break up location through the address provided


## Map View
- Heatmap view
- Filtering system
- Layering
- Subway view
- Overlay with COMPSTAT data?


## General Notes
- Need to focus on trends of specific types of crimes, not just general crime
- Need to be able to filter by time, location, and type of crime
- Need to be able to see trends in crime over time
- Need to be able to see trends via suspects
- Create documentation on Best Practices for data entry
  - Web archive of news articles (if this can be done automatically, great)


## User Stories
- **User Authentication**: Users can login through a link sent to their linked email address. Accounts are created by the Admin only.
- **User Roles**: Admin, Member, Contributor
- **Admin**: Can create accounts, verify entries, and delete entries.
- **Member**: Can create entries and verify entries.
- **Contributor**: Can create entries that need to be verified by a Member or Admin.