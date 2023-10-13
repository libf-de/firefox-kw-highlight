/*
 * This highlights text like "KW 41"
 */

// Calculate calendar week
const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
const weekNumber = Math.ceil(days / 7);

const kwRegex = new RegExp("(KW\\s*" + weekNumber + ")","gi");

// Find occurrences and color them red.
var xpath = "//*[contains(text(),'KW " + weekNumber + "')]";
var matchingElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for ( var i=0 ; i < matchingElements.snapshotLength; i++ ) {
  matchingElements.snapshotItem(i).style.color = "red";
  matchingElements.snapshotItem(i).style.fontWeight = 'bold';
}