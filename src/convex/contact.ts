import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Store the contact submission in the database
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      message: args.message,
      status: "new",
    });

    // Send email notification
    await ctx.scheduler.runAfter(0, internal.sendEmails.sendContactEmail, {
      name: args.name,
      email: args.email,
      message: args.message,
    });

    return contactId;
  },
});
