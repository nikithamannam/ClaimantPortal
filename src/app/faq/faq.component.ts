import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports:[CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  travelAndAsssit = [
    {
      question: 'Which insurance information do I need to bring on my trip?',
      answer: 'Always carry your insurance documents when travelling outside your province or territory. These documents include important details such as assistance numbers, your policy number, and coverage details.',
      isActive: false
    },
    {
      question: 'What should I do if I have a medical emergency when travelling?',
      answer: 'Immediately contact the emergency number listed in your insurance documents for help and instructions on how to proceed.',
      isActive: false
    },
    {
      question: 'What if I can’t call you right away?',
      answer: 'If you are unable to call us immediately, make sure to reach out to a local medical provider or emergency service and inform them of your insurance coverage. You can call us as soon as you are able to.',
      isActive: false
    },
    {
      question: 'If I need medical attention, can you refer me to a doctor or clinic?',
      answer: 'Yes, we can refer you to a local doctor or clinic. Please provide us with your location, and we will assist you in finding the nearest medical facility that accepts your insurance.',
      isActive: false
    }
  ];

  claim = [
    {
      question: 'Which insurance information do I need to bring on my trip?',
      answer: 'Always carry your insurance documents when travelling outside your province or territory. These documents include important details such as assistance numbers, your policy number, and coverage details.',
      isActive: false
    },
    {
      question: 'What should I do if I have a medical emergency when travelling?',
      answer: 'Immediately contact the emergency number listed in your insurance documents for help and instructions on how to proceed.',
      isActive: false
    },
    {
      question: 'What if I can’t call you right away?',
      answer: 'If you are unable to call us immediately, make sure to reach out to a local medical provider or emergency service and inform them of your insurance coverage. You can call us as soon as you are able to.',
      isActive: false
    },
    {
      question: 'If I need medical attention, can you refer me to a doctor or clinic?',
      answer: 'Yes, we can refer you to a local doctor or clinic. Please provide us with your location, and we will assist you in finding the nearest medical facility that accepts your insurance.',
      isActive: false
    },
    {
      question: 'What should I do if I receive bills?',
      answer: 'If you receive bills for medical services, you should keep all receipts and documentation related to the treatment. You can submit these bills to us as part of your claim for reimbursement.',
      isActive: false
    },
    {
      question: 'How can I contact you about my claim?',
      answer: 'You can contact us about your claim via phone, email, or by submitting a message through our website. All contact details are provided in your insurance documents.',
      isActive: false
    },
    {
      question: 'What should I do if I have out-of-pocket expenses?',
      answer: 'If you have out-of-pocket expenses, retain the receipts and submit them as part of your claim. We will process them and reimburse you based on the terms of your insurance policy.',
      isActive: false
    },
    {
      question: 'Do I need to send you the original documents or do you accept copies?',
      answer: 'We accept copies of the original documents for claim submission. However, you may need to provide original documents upon request for verification purposes.',
      isActive: false
    },
    {
      question: 'Which currency will I be reimbursed in?',
      answer: 'You will be reimbursed in the currency of your home country unless otherwise specified in your policy. Currency exchange rates will apply as needed.',
      isActive: false
    },
    {
      question: 'What is your mailing address?',
      answer: 'Our mailing address can be found in the contact section of your insurance policy documents. Please ensure that you include your claim reference number when mailing any documents.',
      isActive: false
    },
    {
      question: 'How do I submit a claim?',
      answer: 'To submit a claim, complete the claim form included in your policy package and send it along with any relevant documents, such as bills, receipts, and medical reports. You can submit your claim online or by mail.',
      isActive: false
    },
    {
      question: 'Do I need a claim form? What else will I need to send you?',
      answer: 'Yes, you will need to complete a claim form. In addition, please submit any supporting documents such as receipts, medical reports, and proof of payment for services. Your insurance documents will provide further details.',
      isActive: false
    },
    {
      question: 'How will I know when my claim is settled?',
      answer: 'Once your claim is processed and settled, you will receive a notification via email or mail detailing the outcome of your claim, including the reimbursement amount and any further steps if required.',
      isActive: false
    }
  ];
  
  

  toggleItem(faq: any): void {
    faq.isActive = !faq.isActive;

    // Close all other items
    this.travelAndAsssit.forEach(f => {
      if (f !== faq) {
        f.isActive = false;
      }
    });
  }
  toggleItemC(faq: any): void {
    faq.isActive = !faq.isActive;

    this.claim.forEach(f => {
      if (f !== faq) {
        f.isActive = false;
      }
    });
  }
}
