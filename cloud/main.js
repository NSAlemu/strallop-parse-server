require('./Address')
require('./Event')
require('./Order')
require('./PersonalInformation')
require('./Roles')
require('./TicketType')
require('./TicketOrder')
require('./Ushering')
require('./User')
require('./BudgetCategory')
require('./BudgetItem')
require('./FileStore')
require('./OrganizationManagement')
require('./Email')
require('./website')
require('./Definitions')
require('./BudgetPaidItem')

// Parse.Cloud.beforeSave("BoardList", async (request) => {
//   await accessControl.boardListBeforeSave(request);
//
// });
// Parse.Cloud.beforeSave("Budget", async (request) => {
//   await accessControl.budgetBeforeSave(request);
//
// });
// Parse.Cloud.beforeSave("BudgetChecklistItem", async (request) => {
//   await accessControl.budgetChecklistItemBeforeSave(request);
//
// });
// Parse.Cloud.beforeSave("CardChecklist", async (request) => {
//   await accessControl.cardChecklistBeforeSave(request);
// });
// // Parse.Cloud.beforeSave("CardChecklistItem", async (request) => {
// // });
// // Parse.Cloud.beforeSave("CardLabel", async (request) => {
// // });
// // Parse.Cloud.beforeSave("Email", async (request) => {
// // });
// Parse.Cloud.beforeSave("Event", async (request) => {
//   if (request.user)
//     await accessControl.eventBeforeSave(request);
//
// });
// Parse.Cloud.beforeSave("FileStore", async (request) => {
// });
// Parse.Cloud.beforeSave("ListCard", async (request) => {
// });
// Parse.Cloud.beforeSave("Order", async (request) => {
// });
// Parse.Cloud.beforeSave("Organization", async (request) => {
// });
// Parse.Cloud.beforeSave("PersonalInformation", async (request) => {
// });
// Parse.Cloud.beforeSave("TicketOrder", async (request) => {
// });
// Parse.Cloud.beforeSave("TicketType", async (request) => {
// });


// Parse.Cloud.afterSave("_Role", async (request) => {
//   if (request.user)
//     await roleManagement.roleAfterSave(request);
// });
// Parse.Cloud.afterSave("Event", async (request) => {
//   if (request.user)
//     await roleManagement.eventAfterSave(request);
// });
// Parse.Cloud.afterSave("BoardList", async (request) => {
//   await roleManagement.boardListAfterSave(request);
// });
// Parse.Cloud.afterSave("Budget", async (request) => {
//   await roleManagement.budgetAfterSave(request);
// });
// Parse.Cloud.afterSave("BudgetChecklistItem", async (request) => {
//   await roleManagement.budgetChecklistItemAfterSave(request);
// });
// Parse.Cloud.afterSave("CardChecklist", async (request) => {
//   await roleManagement.cardChecklistAfterSave(request);
// });
// Parse.Cloud.afterSave("CardChecklistItem", async (request) => {
//   await roleManagement.cardChecklistItemAfterSave(request);
// });
// Parse.Cloud.afterSave("CardLabel", async (request) => {
//   await roleManagement.cardLabelAfterSave(request);
// });
// // Parse.Cloud.afterSave("Email", async (request) => {
// // });
// // Parse.Cloud.afterSave("Event", async (request) => {
// //   await roleManagement.eventAfterSave(request);
// // });
// Parse.Cloud.afterSave("FileStore", async (request) => {
//   await roleManagement.fileStoreAfterSave(request);
// });
// Parse.Cloud.afterSave("ListCard", async (request) => {
//   await roleManagement.listCardAfterSave(request);
// });
// Parse.Cloud.afterSave("Order", async (request) => {
//   const channel = request.object;
//   const channel_orig = request.original;
//
//   if ((channel && channel_orig) && (channel.get("status") !== channel_orig.get("status"))) {
//     const emailToSend =  await email.sendConfirmationEmail(request.object.id)
//     await Parse.Cloud.run("sendEmail", {to: emailToSend.to, subject: emailToSend.subject, body: emailToSend.body});
//   }
//   await roleManagement.orderAfterSave(request);
// });
// Parse.Cloud.afterSave("Organization", async (request) => {
//   await organizationManagement.organizationAfterSave(request);
// });
// // Parse.Cloud.afterSave("PersonalInformation", async (request) => {
// // });
// Parse.Cloud.afterSave("TicketOrder", async (request) => {
//   await roleManagement.ticketOrderAfterSave(request);
// });
// Parse.Cloud.afterSave("TicketType", async (request) => {
//   await roleManagement.ticketTypeAfterSave(request);
// });
//
