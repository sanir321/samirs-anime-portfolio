import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

// Rate limiting: Track submissions by email
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3; // Max 3 submissions per minute

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Check rate limiting
    const recentSubmissions = await ctx.db
      .query("contacts")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    const now = Date.now();
    const recentCount = recentSubmissions.filter(
      (sub) => now - sub._creationTime < RATE_LIMIT_WINDOW
    ).length;

    if (recentCount >= MAX_SUBMISSIONS) {
      throw new Error(
        "Too many submissions. Please wait a minute before trying again."
      );
    }

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