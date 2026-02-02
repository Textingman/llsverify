# TFN Compliance Summary - LLS Verify

**Date:** February 1, 2026  
**Campaign:** llsverify TFN  
**Status:** Updated for CTIA Compliance

---

## Executive Summary

This document outlines all changes made to the LLS Verify website to address Infobip TFN compliance rejection and ensure full CTIA compliance for SMS messaging programs.

---

## Issues Identified by Infobip

The campaign was rejected for the following reasons:

1. ❌ **Multiple SMS-related checkboxes with overlapping purposes** - Had automated SMS, account notifications, and customer care checkboxes that were unclear
2. ❌ **Combined SMS and email consent** - Account notifications checkbox combined both SMS and email consent (not allowed)
3. ❌ **Missing CTIA-required disclosures** - Lacked specific message types, frequency, rates disclosure, and proper opt-out instructions

---

## Changes Implemented

### 1. Restructured Consent Checkboxes ✅

**REMOVED:**
- ❌ Generic "automated SMS messages" checkbox (too vague)
- ❌ "Automated customer care calls" checkbox (not needed for SMS verification service)
- ❌ "Account notifications" checkbox (combined SMS/email - violation)

**ADDED:**
- ✅ **SMS Marketing Consent (Optional)** - Separate, CTIA-compliant SMS consent
- ✅ **Email Marketing Consent (Optional)** - Separate email consent
- ✅ **Transactional SMS Notice** - Informational notice (not a checkbox) explaining verification codes
- ✅ **Terms & Privacy Policy (Required)** - Required checkbox for legal agreement

### 2. CTIA-Compliant SMS Consent Language ✅

The new SMS Marketing Consent checkbox includes ALL required CTIA elements:

```
SMS Marketing Consent (Optional): By checking this box, you consent to receive 
marketing and promotional SMS messages from LLS Verify, including service updates, 
feature announcements, and special offers. Message frequency: up to 4 messages per 
month. Message and data rates may apply. Reply STOP to opt-out at any time or HELP 
for assistance. You can also contact us at support@llsverify.com. View our Terms 
and Privacy Policy. Consent is not required as a condition of purchasing or using 
any products or services.
```

**CTIA Requirements Met:**
- ✅ Specific message types (marketing, promotional, service updates, feature announcements, special offers)
- ✅ Frequency disclosure (up to 4 messages per month)
- ✅ "Message and data rates may apply"
- ✅ STOP instructions (Reply STOP to opt-out)
- ✅ HELP instructions (Reply HELP for assistance)
- ✅ Support contact (support@llsverify.com)
- ✅ Links to Terms & Privacy Policy
- ✅ "Consent is not required as a condition of purchasing or using any products or services"

### 3. Transactional SMS Notice ✅

Added an informational notice (NOT a checkbox) that explains:
- Transactional SMS messages (verification codes, security alerts) are separate from marketing
- These are essential for service delivery
- Do not require separate opt-in consent
- Only sent when necessary for account verification and security

This clarifies the difference between marketing SMS (requires opt-in) and transactional SMS (service-related).

### 4. Form Styling Improvements ✅

- Added `className="block"` to all form field containers
- Added `text-black` to all input fields for better text visibility
- Improved visual hierarchy and readability

### 5. Email Domain Consistency ✅

**No changes needed** - Website already uses `support@llsverify.com` consistently across all pages:
- Homepage footer: support@llsverify.com
- About page footer: support@llsverify.com
- Privacy page: support@llsverify.com, privacy@llsverify.com
- Terms page: support@llsverify.com, legal@llsverify.com
- Signup page: support@llsverify.com

---

## Updated Opt-In Description for Infobip Portal

Use this description when registering your TFN campaign in the Infobip portal:

### **Opt-In Description:**

```
Users provide explicit consent through our website signup form at https://llsverify.com/signup. 
The form includes a separate, optional SMS Marketing Consent checkbox with CTIA-compliant 
language that clearly states:

- Message types: marketing and promotional SMS messages including service updates, feature 
  announcements, and special offers
- Frequency: up to 4 messages per month
- Rates disclosure: "Message and data rates may apply"
- Opt-out: Reply STOP to opt-out at any time
- Help: Reply HELP for assistance or contact support@llsverify.com
- Terms & Privacy: Links provided to full policies
- No purchase required: "Consent is not required as a condition of purchasing or using any 
  products or services"

SMS consent is captured separately from email consent. Users must also agree to our Terms 
of Service and Privacy Policy via a required checkbox.

Transactional messages (verification codes, security alerts) are disclosed separately as 
service-essential communications that do not require marketing opt-in.
```

---

## Example SMS Messages for TFN Registration

### Marketing Messages (Require Opt-In):

1. **Welcome Message:**
   ```
   Welcome to LLS Verify! Get ready for SMS verification made easy. Reply STOP to opt-out, 
   HELP for help. Msg&data rates may apply. https://llsverify.com
   ```

2. **Feature Announcement:**
   ```
   LLS Verify: New feature alert! Multi-brand support now available. Learn more: 
   https://llsverify.com/about Reply STOP to opt-out, HELP for help.
   ```

3. **Service Update:**
   ```
   LLS Verify update: Enhanced security features now live. Check your dashboard for details. 
   Reply STOP to opt-out, HELP for help. Msg&data rates may apply.
   ```

4. **Promotional Offer:**
   ```
   LLS Verify: Special offer - 20% off premium plans this month! Visit https://llsverify.com/signup 
   Reply STOP to opt-out, HELP for help.
   ```

### Transactional Messages (No Opt-In Required):

1. **Verification Code:**
   ```
   Your LLS Verify code is: 123456. This code expires in 10 minutes. Do not share this code.
   ```

2. **Account Security Alert:**
   ```
   LLS Verify Security Alert: New login detected from [Location]. If this wasn't you, 
   contact support@llsverify.com immediately.
   ```

3. **Password Reset:**
   ```
   LLS Verify: Password reset requested. Use code 789012 to reset your password. 
   Expires in 15 minutes.
   ```

---

## CTIA Compliance Checklist

- ✅ **Separate SMS and Email Consent** - Independent checkboxes
- ✅ **Specific Message Types** - Clearly defined (marketing, promotional, service updates, feature announcements, special offers)
- ✅ **Frequency Disclosure** - "up to 4 messages per month"
- ✅ **Rates Disclosure** - "Message and data rates may apply"
- ✅ **STOP Instructions** - "Reply STOP to opt-out at any time"
- ✅ **HELP Instructions** - "Reply HELP for assistance"
- ✅ **Support Contact** - support@llsverify.com provided
- ✅ **Terms & Privacy Links** - Links to full policies included
- ✅ **No Purchase Required** - "Consent is not required as a condition of purchasing or using any products or services"
- ✅ **Optional Consent** - Clearly marked as "(Optional)"
- ✅ **Transactional Disclosure** - Separate notice for service-essential messages
- ✅ **Phone Number Optional** - Phone field clearly marked "(Optional)"

---

## Files Modified

1. **app/signup/page.tsx** - Complete restructure of consent checkboxes and form styling

---

## Next Steps for Infobip Submission

1. ✅ Review this summary document
2. ⏳ Test the website locally to verify all changes
3. ⏳ Deploy changes to production (https://llsverify.com)
4. ⏳ Update Infobip TFN campaign with new opt-in description (see above)
5. ⏳ Provide example SMS messages to Infobip (see above)
6. ⏳ Resubmit campaign for approval

---

## Support Contacts

- **Website:** https://llsverify.com
- **Support Email:** support@llsverify.com
- **Privacy Email:** privacy@llsverify.com
- **Legal Email:** legal@llsverify.com

---

## References

- **CTIA Guidelines:** https://www.infobip.com/docs/essentials/usa-and-canada-compliance/usa-messaging-content-requirements#ctia---us-sms-messaging-programs
- **Infobip Support:** support@infobip.com

---

**Document Version:** 1.0  
**Last Updated:** February 1, 2026  
**Prepared By:** LLS Verify Development Team
