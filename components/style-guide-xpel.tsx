'use client';

import React from 'react';
import { Button, ArrowRightIcon, CloseIcon, TextLink, Tab } from './ui/Button';
import { Input, TextArea, Checkbox, Select, Form, RequiredFieldNote, FormSection, InputGroup } from './ui/Input';
import { Accordion } from './ui/Accordion';
import { Alert, BannerAlert, AnnouncementAlert } from './ui/Alert';



// ============================================================================
//  STYLE GUIDE COMPONENT
// ============================================================================
// Based on Figma: https://www.figma.com/design/ImylNEgWayQ9ZqQg2fwNJw/India-Website-Layout?node-id=1-2660&t=LWM7800XEW3Tblyz-0

const StyleGuideXpel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 font-display">
            XPEL India Style Guide
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Design system for XPEL India website
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Color Palette
          </h2>
          
          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Neutral (Grayscale)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorSwatch
                name="Neutral 900"
                color="bg-[#1B1A1A]"
                hex="#1B1A1A"
                description="Off-black, base text color"
              />
              <ColorSwatch
                name="Neutral 800"
                color="bg-[#474646]"
                hex="#474646"
                description="Accessible minimum (4.5:1)"
              />
              <ColorSwatch
                name="Neutral 700"
                color="bg-[#585757]"
                hex="#585757"
                description="Dark gray"
              />
              <ColorSwatch
                name="Neutral 600"
                color="bg-[#6C6B6B]"
                hex="#6C6B6B"
                description="Medium gray"
              />
              <ColorSwatch
                name="Neutral 500"
                color="bg-[#767676]"
                hex="#767676"
                description="AA Regular"
              />
              <ColorSwatch
                name="Neutral 400"
                color="bg-[#B2B2B2]"
                hex="#B2B2B2"
                description="AA Large"
              />
              <ColorSwatch
                name="Neutral 300"
                color="bg-[#CDCDCD]"
                hex="#CDCDCD"
                description="Light gray"
              />
              <ColorSwatch
                name="Neutral 200"
                color="bg-[#EEEEEE]"
                hex="#EEEEEE"
                description="Input borders, disabled state"
              />
              <ColorSwatch
                name="Neutral 100"
                color="bg-[#F8F8F8]"
                hex="#F8F8F8"
                description="Gray background"
              />
              <ColorSwatch
                name="White"
                color="bg-white border border-gray-200"
                hex="#FFFFFF"
                description="White"
              />
            </div>
          </div>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorSwatch
                name="Primary 100"
                color="bg-[#FFEFCD]"
                hex="#FFEFCD"
                description="Light background"
              />
              <ColorSwatch
                name="Primary 200"
                color="bg-[#FFD477]"
                hex="#FFD477"
                description="Light accent"
              />
              <ColorSwatch
                name="Primary 300 (Brand)"
                color="bg-[#FFB81C]"
                hex="#FFB81C"
                description="Main brand color"
              />
              <ColorSwatch
                name="Primary 400"
                color="bg-[#BF8A15]"
                hex="#BF8A15"
                description="Dark variant"
              />
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Accent Colors</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Accent - Teal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Accent-Teal 100"
                  color="bg-[#DFF2F1]"
                  hex="#DFF2F1"
                  description="Light background"
                />
                <ColorSwatch
                  name="Accent-Teal 200"
                  color="bg-[#C2E4E4]"
                  hex="#C2E4E4"
                  description="Light accent"
                />
                <ColorSwatch
                  name="Accent-Teal 300 (Brand)"
                  color="bg-[#1B6D6A]"
                  hex="#1B6D6A"
                  description="Brand teal"
                />
                <ColorSwatch
                  name="Accent-Teal 400"
                  color="bg-[#144E4D]"
                  hex="#144E4D"
                  description="Dark teal"
                />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Accent - Navy</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Accent-Navy 100"
                  color="bg-[#E6ECF4]"
                  hex="#E6ECF4"
                  description="Light background"
                />
                <ColorSwatch
                  name="Accent-Navy 200"
                  color="bg-[#A3AEC0]"
                  hex="#A3AEC0"
                  description="Light accent"
                />
                <ColorSwatch
                  name="Accent-Navy 300 (Brand)"
                  color="bg-[#364258]"
                  hex="#364258"
                  description="Brand navy"
                />
                <ColorSwatch
                  name="Accent-Navy 400"
                  color="bg-[#2C3546]"
                  hex="#2C3546"
                  description="Dark navy"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Accent - Red</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Accent-Red 100"
                  color="bg-[#F5E0E0]"
                  hex="#F5E0E0"
                  description="Light background"
                />
                <ColorSwatch
                  name="Accent-Red 200"
                  color="bg-[#E19F9E]"
                  hex="#E19F9E"
                  description="Light accent"
                />
                <ColorSwatch
                  name="Accent-Red 300 (Brand)"
                  color="bg-[#9E3835]"
                  hex="#9E3835"
                  description="Brand red"
                />
                <ColorSwatch
                  name="Accent-Red 400"
                  color="bg-[#762927]"
                  hex="#762927"
                  description="Dark red"
                />
              </div>
            </div>
          </div>

          {/* Support Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Support Colors</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Success</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Success 100"
                  color="bg-[#E6F0D4]"
                  hex="#E6F0D4"
                  description="Light background"
                />
                <ColorSwatch
                  name="Success 200 (ADA Dark)"
                  color="bg-[#9DB45C]"
                  hex="#9DB45C"
                  description="ADA Dark"
                />
                <ColorSwatch
                  name="Success 300 (ADA Light)"
                  color="bg-[#5D7238]"
                  hex="#5D7238"
                  description="ADA Light"
                />
                <ColorSwatch
                  name="Success 400"
                  color="bg-[#4D5E2E]"
                  hex="#4D5E2E"
                  description="Dark success"
                />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Warning</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Warning 100"
                  color="bg-[#FDE0D3]"
                  hex="#FDE0D3"
                  description="Light background"
                />
                <ColorSwatch
                  name="Warning 200 (ADA Dark)"
                  color="bg-[#F98F60]"
                  hex="#F98F60"
                  description="ADA Dark"
                />
                <ColorSwatch
                  name="Warning 300 (ADA Light)"
                  color="bg-[#CC4E08]"
                  hex="#CC4E08"
                  description="ADA Light"
                />
                <ColorSwatch
                  name="Warning 400"
                  color="bg-[#A94107]"
                  hex="#A94107"
                  description="Dark warning"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Error</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Error 100"
                  color="bg-[#FFD6D7]"
                  hex="#FFD6D7"
                  description="Light background"
                />
                <ColorSwatch
                  name="Error 200 (ADA Dark)"
                  color="bg-[#F15156]"
                  hex="#F15156"
                  description="ADA Dark"
                />
                <ColorSwatch
                  name="Error 300 (ADA Light)"
                  color="bg-[#DE1C22]"
                  hex="#DE1C22"
                  description="ADA Light"
                />
                <ColorSwatch
                  name="Error 400"
                  color="bg-[#9F1B1F]"
                  hex="#9F1B1F"
                  description="Dark error"
                />
              </div>
            </div>
          </div>

          {/* Background Colors */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Background Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorSwatch
                name="White"
                color="bg-white border border-gray-200"
                hex="#FFFFFF"
                description="Primary background"
              />
              <ColorSwatch
                name="Light Gray"
                color="bg-gray-50"
                hex="#F9FAFB"
                description="Secondary background"
              />
              <ColorSwatch
                name="Dark"
                color="bg-gray-900"
                hex="#364258"
                description="Dark background"
              />
              <ColorSwatch
                name="Overlay"
                color="bg-black bg-opacity-50"
                hex="rgba(0,0,0,0.5)"
                description="Modal overlay"
              />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Typography
          </h2>

          {/* Font Families */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Font Families</h3>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Body Font (Jost Variable)</h4>
                <p className="text-2xl font-sans">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500 mt-2">Used for body text, paragraphs, and general content</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Display Font (Futura PT)</h4>
                <p className="text-2xl font-display">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500 mt-2">Used for headings, titles, and display text</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Mono Font (JetBrains Mono)</h4>
                <p className="text-2xl font-mono">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500 mt-2">Used for code and technical content</p>
              </div>
            </div>
          </div>

          {/* Futura Font Details */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Futura Font Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Font Weights</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-display font-light text-gray-900">Light (300) - Futura Light</p>
                    <p className="text-xs text-gray-500">Used for subtle emphasis and decorative elements</p>
                  </div>
                  <div>
                    <p className="text-lg font-display font-normal text-gray-900">Regular (400) - Futura Medium</p>
                    <p className="text-xs text-gray-500">Used for pull quotes and general display text</p>
                  </div>
                  <div>
                    <p className="text-lg font-display font-medium text-gray-900">Medium (500) - Futura Demi</p>
                    <p className="text-xs text-gray-500">Used for headings, titles, and action text</p>
                  </div>
                  <div>
                    <p className="text-lg font-display font-semibold text-gray-900">Semibold (600) - Futura Heavy</p>
                    <p className="text-xs text-gray-500">Used for subtitles and strong emphasis</p>
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-gray-900">Bold (700) - Futura Bold</p>
                    <p className="text-xs text-gray-500">Used for badges and maximum emphasis</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Usage Guidelines</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Headings & Titles</h5>
                    <p className="text-xs text-gray-600">Use Futura Demi (500) for all heading levels</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Subtitles</h5>
                    <p className="text-xs text-gray-600">Use Futura Heavy (600) with uppercase and letter-spacing</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Pull Quotes</h5>
                    <p className="text-xs text-gray-600">Use Futura Medium (400) with italic styling</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Actions & Buttons</h5>
                    <p className="text-xs text-gray-600">Use Futura Demi (500) for button text and CTAs</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Badges & Labels</h5>
                    <p className="text-xs text-gray-600">Use Futura Bold (700) for badges and labels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Futura Character Set */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Futura Character Set</h3>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Uppercase Letters</h4>
                  <p className="text-2xl font-display font-medium text-gray-900 tracking-wide">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Lowercase Letters</h4>
                  <p className="text-2xl font-display font-medium text-gray-900 tracking-wide">
                    a b c d e f g h i j k l m n o p q r s t u v w x y z
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Numbers</h4>
                  <p className="text-2xl font-display font-medium text-gray-900 tracking-wide">
                    0 1 2 3 4 5 6 7 8 9
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Special Characters</h4>
                  <p className="text-2xl font-display font-medium text-gray-900 tracking-wide">
                    ! @ # $ % ^ & * ( ) _ + - = &#123; &#125; [ ] | \ : ; &quot; &apos; &lt; &gt; ? , . /
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Font Sizes - Typography System */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Typography System</h3>
            
            {/* Headlines */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Headlines (Futura PT Demi, 500)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 1 (72px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[4.5rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Protection</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 2 (48px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[3rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Premium Protection</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 3 (32px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[2rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Product Features</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 4 (24px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[1.5rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Section Title</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 5 (20px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[1.25rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Card Title</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Heading 6 (18px, -1% letter-spacing, 110% line-height)</h5>
                  <p className="text-[1.125rem] font-display font-medium text-gray-900 tracking-[-0.01em] leading-[110%]">Small Title</p>
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Paragraphs (Jost Variable)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph Large (20px, 1% letter-spacing, 150% line-height, 450 weight)</h5>
                  <p className="text-[1.25rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-[450]">XPEL provides premium paint protection film that safeguards your vehicle&apos;s finish from road debris, stone chips, and environmental damage.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph Large Bold (20px, 1% letter-spacing, 150% line-height, 600 weight)</h5>
                  <p className="text-[1.25rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-semibold">XPEL provides premium paint protection film that safeguards your vehicle&apos;s finish from road debris, stone chips, and environmental damage.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph Medium (18px, 1% letter-spacing, 150% line-height, 450 weight)</h5>
                  <p className="text-[1.125rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-[450]">Our advanced technology ensures maximum protection while maintaining the original appearance of your vehicle.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph Medium Bold (18px, 1% letter-spacing, 150% line-height, 600 weight)</h5>
                  <p className="text-[1.125rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-semibold">Our advanced technology ensures maximum protection while maintaining the original appearance of your vehicle.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph Small (16px, 1% letter-spacing, 150% line-height, 450 weight)</h5>
                  <p className="text-[1rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-[450]">Professional installation by certified technicians guarantees optimal results and long-lasting protection.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Paragraph X-Small (14px, 1% letter-spacing, 150% line-height, 450 weight)</h5>
                  <p className="text-[0.875rem] font-sans text-gray-900 tracking-[0.01em] leading-[150%] font-[450]">Trust XPEL for superior protection and peace of mind.</p>
                </div>
              </div>
            </div>

            {/* Subtitles */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Subtitles (Futura PT Heavy, 600)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Subtitle Large (16px, 6% letter-spacing, 100% line-height)</h5>
                  <p className="text-[1rem] font-display font-semibold text-gray-900 tracking-[0.06em] leading-[100%] uppercase">Premium Protection</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Subtitle Small (14px, 6% letter-spacing, 100% line-height)</h5>
                  <p className="text-[0.875rem] font-display font-semibold text-gray-900 tracking-[0.06em] leading-[100%] uppercase">Advanced Technology</p>
                </div>
              </div>
            </div>

            {/* Pull Quotes */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Pull Quotes (Futura PT Medium, 400)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pull Quote Large (32px, -1% letter-spacing, 140% line-height)</h5>
                  <p className="text-[2rem] font-display font-normal text-gray-900 tracking-[-0.01em] leading-[140%] italic">&ldquo;Protecting what matters most&rdquo;</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pull Quote Small (24px, -1% letter-spacing, 140% line-height)</h5>
                  <p className="text-[1.5rem] font-display font-normal text-gray-900 tracking-[-0.01em] leading-[140%] italic">&ldquo;Quality you can trust&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Actions (Futura PT Demi, 500)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Action Large (20px, 0% letter-spacing, 24px line-height)</h5>
                  <p className="text-[1.25rem] font-display font-medium text-gray-900 tracking-[0em] leading-[24px]">Get Started</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Action Medium (18px, 0% letter-spacing, 20px line-height)</h5>
                  <p className="text-[1.125rem] font-display font-medium text-gray-900 tracking-[0em] leading-[20px]">Learn More</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Action Small (16px, 0% letter-spacing, 18px line-height)</h5>
                  <p className="text-[1rem] font-display font-medium text-gray-900 tracking-[0em] leading-[18px]">Contact Us</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Badges (Futura PT Bold, 700)</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Badge Large (12px, 8% letter-spacing, 100% line-height)</h5>
                  <p className="text-[0.75rem] font-display font-bold text-gray-900 tracking-[0.08em] leading-[100%] uppercase">New</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Badge Small (10px, 8% letter-spacing, 100% line-height)</h5>
                  <p className="text-[0.625rem] font-display font-bold text-gray-900 tracking-[0.08em] leading-[100%] uppercase">Hot</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Styles */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Text Styles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Text Colors</h4>
                <div className="space-y-2">
                  <p className="text-lg font-sans text-gray-900">Primary Text (Gray 900)</p>
                  <p className="text-lg font-sans text-gray-600">Secondary Text (Gray 600)</p>
                  <p className="text-lg font-sans text-gray-400">Tertiary Text (Gray 400)</p>
                  <p className="text-lg font-sans text-white bg-gray-900 px-2 py-1 rounded">Inverse Text (White)</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Font Weights</h4>
                <div className="space-y-2">
                  <p className="text-lg font-sans font-light">Light (300)</p>
                  <p className="text-lg font-sans font-normal">Normal (400)</p>
                  <p className="text-lg font-sans font-medium">Medium (500)</p>
                  <p className="text-lg font-sans font-semibold">Semibold (600)</p>
                  <p className="text-lg font-sans font-bold">Bold (700)</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Component Styles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Component Styles
          </h2>

          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Buttons</h3>
            
            {/* Button Grid - Primary, Secondary, Tertiary */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Button Grid (Primary, Secondary, Tertiary)</h4>
              
              {/* Light Background Section */}
              <div className="mb-8">
                <h5 className="text-md font-medium text-gray-600 mb-4">On Light Background</h5>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Column Headers */}
                  <div className="text-center font-medium text-sm text-gray-600">Primary</div>
                  <div className="text-center font-medium text-sm text-gray-600">Secondary</div>
                  <div className="text-center font-medium text-sm text-gray-600">Tertiary</div>
                </div>

                {/* Filled Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-500 mb-3">Filled</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    {/* Secondary Filled - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    {/* Tertiary Filled - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="light" showArrows className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    {/* Secondary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="light" showArrows className="bg-[#6C6B6B] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="light" showArrows className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>

                {/* Outlined Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-500 mb-3">Outlined</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    {/* Secondary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    {/* Tertiary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="light" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="light" showArrows className="bg-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    {/* Secondary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="light" showArrows className="bg-[#F7F5F5]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="light" showArrows className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="light" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dark Background Section */}
              <div className="mb-8 p-6 bg-gray-900 rounded-lg">
                <h5 className="text-md font-medium text-gray-300 mb-4">On Dark Background</h5>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Column Headers */}
                  <div className="text-center font-medium text-sm text-gray-300">Primary</div>
                  <div className="text-center font-medium text-sm text-gray-300">Secondary</div>
                  <div className="text-center font-medium text-sm text-gray-300">Tertiary</div>
                </div>
                
                {/* Filled Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">Filled</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Secondary Filled - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Tertiary Filled - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Secondary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows className="bg-[#6C6B6B] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>

                {/* Outlined Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">Outlined</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Secondary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Tertiary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows className="bg-[#222222]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Secondary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows className="bg-[#222222]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Blue/Grey Background Section */}
              <div className="mb-8 p-6 bg-[#364258] rounded-lg">
                <h5 className="text-md font-medium text-gray-300 mb-4">On Dark Blue/Grey Background</h5>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Column Headers */}
                  <div className="text-center font-medium text-sm text-gray-300">Primary</div>
                  <div className="text-center font-medium text-sm text-gray-300">Secondary</div>
                  <div className="text-center font-medium text-sm text-gray-300">Tertiary</div>
                </div>
                
                {/* Filled Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">Filled</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Secondary Filled - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Tertiary Filled - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Secondary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows className="bg-[#6C6B6B] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Filled - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Filled - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>

                {/* Outlined Buttons */}
                <div className="mb-6">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">Outlined</h6>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Secondary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    {/* Tertiary Outlined - Default */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Secondary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows className="bg-[#6C6B6B] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    {/* Tertiary Outlined - Hover */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Primary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="primary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Secondary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="secondary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                    {/* Tertiary Outlined - Disabled */}
                    <div className="text-center">
                      <Button variant="tertiary" buttonStyle="outlined" background="dark" showArrows disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Buttons */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Small Buttons</h4>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Column Headers */}
                <div className="text-center font-medium text-sm text-gray-600">Primary</div>
                <div className="text-center font-medium text-sm text-gray-600">Secondary</div>
                <div className="text-center font-medium text-sm text-gray-600">Tertiary</div>
              </div>
              
              {/* Light Background Small Buttons */}
              <div className="mb-6">
                <h6 className="text-sm font-medium text-gray-500 mb-3">On Light Background</h6>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Button variant="primary" buttonStyle="filled" background="light" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="secondary" buttonStyle="filled" background="light" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="tertiary" buttonStyle="filled" background="light" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dark Background Small Buttons */}
              <div className="p-6 bg-gray-900 rounded-lg">
                <h6 className="text-sm font-medium text-gray-400 mb-3">On Dark Background</h6>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Button variant="primary" buttonStyle="filled" background="dark" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="secondary" buttonStyle="filled" background="dark" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="tertiary" buttonStyle="filled" background="dark" size="sm" showArrows>
                      Label
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Microanimation Buttons (Icon-Only) */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Microanimation Buttons (Icon-Only)</h4>
              
              {/* Right Arrow Icon Buttons */}
              <div className="mb-6">
                <h5 className="text-md font-medium text-gray-600 mb-4">Right Arrow Icon Buttons</h5>
                
                {/* Light Background */}
                <div className="mb-4">
                  <h6 className="text-sm font-medium text-gray-500 mb-3">On Light Background</h6>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<ArrowRightIcon />}>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<ArrowRightIcon />} className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<ArrowRightIcon />} isSelected>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Selected</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<ArrowRightIcon />} disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>

                {/* Dark Background */}
                <div className="p-6 bg-gray-900 rounded-lg">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">On Dark Background</h6>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<ArrowRightIcon />}>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<ArrowRightIcon />} className="bg-[#333333]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<ArrowRightIcon />} isSelected>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Selected</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<ArrowRightIcon />} disabled>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Disabled</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Close/X Icon Buttons */}
              <div className="mb-6">
                <h5 className="text-md font-medium text-gray-600 mb-4">Close/X Icon Buttons</h5>
                
                {/* Light Background */}
                <div className="mb-4">
                  <h6 className="text-sm font-medium text-gray-500 mb-3">On Light Background</h6>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<CloseIcon />}>
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Default</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<CloseIcon />} className="bg-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Hover</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="light" icon={<CloseIcon />} className="bg-[#1B1A1A] text-white">
                        Label
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Mobile On Click</p>
                    </div>
                  </div>
                </div>
                
                {/* Dark Background */}
                <div className="p-6 bg-gray-900 rounded-lg">
                  <h6 className="text-sm font-medium text-gray-400 mb-3">On Dark Background</h6>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<CloseIcon />}>
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Default</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<CloseIcon />} className="bg-black">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Hover</p>
                    </div>
                    <div className="text-center">
                      <Button isIconOnly background="dark" icon={<CloseIcon />} className="bg-white text-[#1B1A1A]">
                        Label
                      </Button>
                      <p className="text-xs text-gray-400 mt-2">Mobile On Click</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Microanimation Description */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h6 className="text-sm font-medium text-blue-800 mb-2">Microanimation</h6>
                <p className="text-xs text-blue-700">
                  <strong>Desktop:</strong> Icon spins and changes to secondary color on hover state.<br/>
                  <strong>Mobile:</strong> Changes on click before modal close. Animation can be viewed in preview mode.
                </p>
              </div>
            </div>

            {/* Focus States */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Focus States</h4>
              <p className="text-sm text-gray-600 mb-4">Focus indicators must have a color contrast ratio of at least 3:1 against adjacent colors for accessibility. See WCAG guidelines or this design resource for more information.</p>
              
              {/* Light Background Focus States */}
              <div className="mb-6">
                <h6 className="text-sm font-medium text-gray-500 mb-3">On Light Background</h6>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Button variant="primary" buttonStyle="filled" background="light" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Primary</p>
                  </div>
                  <div className="text-center">
                    <Button variant="secondary" buttonStyle="filled" background="light" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Secondary</p>
                  </div>
                  <div className="text-center">
                    <Button variant="tertiary" buttonStyle="filled" background="light" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Tertiary</p>
                  </div>
                </div>
              </div>
              
              {/* Dark Background Focus States */}
              <div className="p-6 bg-gray-900 rounded-lg">
                <h6 className="text-sm font-medium text-gray-400 mb-3">On Dark Background</h6>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Button variant="primary" buttonStyle="filled" background="dark" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-400 mt-2">Primary</p>
                  </div>
                  <div className="text-center">
                    <Button variant="secondary" buttonStyle="filled" background="dark" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-400 mt-2">Secondary</p>
                  </div>
                  <div className="text-center">
                    <Button variant="tertiary" buttonStyle="filled" background="dark" showArrows className="border-2 border-dashed border-[#6C6B6B]">
                      Label
                    </Button>
                    <p className="text-xs text-gray-400 mt-2">Tertiary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Text Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Text Links</h4>
              <div className="flex space-x-8">
                <TextLink href="#">Add Custom Engraving</TextLink>
                <TextLink href="#">Add Custom Engraving</TextLink>
                <TextLink href="#">Add Custom Engraving</TextLink>
              </div>
            </div>

            {/* Tab Components */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Tab Components</h4>
              <div className="flex space-x-2">
                <Tab>Content Tab</Tab>
                <Tab showDot>Content Tab</Tab>
                <Tab isActive>Content Tab</Tab>
              </div>
            </div>
          {/* Form Elements */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Form Elements</h3>
            
            {/* Complete Form Example */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Complete Form Example</h4>
              <div className="p-8 bg-gray-50 rounded-lg">
                <Form onSubmit={(e) => e.preventDefault()} className="max-w-2xl">
                  <FormSection>
                    <InputGroup>
                      <Input
                        label="First Name"
                        required
                        placeholder="Gina"
                        defaultValue="Gina"
                      />
                      <Input
                        label="Last Name"
                        required
                        placeholder="Mysorewala"
                        defaultValue="Mysorewala"
                      />
                      <Input
                        label="Company Name"
                        optional
                        placeholder="Company Name (Optional)"
                      />
                      <Input
                        label="Email"
                        required
                        type="email"
                        placeholder="Email Address"
                      />
                      <Input
                        label="Phone Number"
                        optional
                        type="tel"
                        placeholder="Phone Number (Optional)"
                      />
                    </InputGroup>
                    
                    <TextArea
                      label="Please provide additional details related to your request."
                      placeholder="Please provide additional details related to your request."
                      rows={4}
                    />
                    
                    <Checkbox
                      label="By checking this box you are opting in to receive news, marketing, and promotional offers from XPEL."
                    />
                    
                    <RequiredFieldNote />
                    
                    <Button variant="primary" buttonStyle="filled">
                      Submit
                    </Button>
                  </FormSection>
                </Form>
              </div>
            </div>

            {/* Input Field States */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Input Field States</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Default</h5>
                  <Input
                    label="First Name"
                    required
                    placeholder="Gina"
                    defaultValue="Gina"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Focused</h5>
                  <Input
                    label="Email Address"
                    placeholder="Email Address"
                    className="border-2 border-[#FFB81C] focus:ring-[#FFB81C] focus:border-[#FFB81C]"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error</h5>
                  <Input
                    label="Phone Number"
                    optional
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    variant="error"
                    error="Please enter a valid phone number"
                  />
                </div>
              </div>
            </div>

            {/* Input Field Sizes */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Input Field Sizes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Small (40px)</h5>
                  <Input
                    label="Search"
                    placeholder="Search..."
                    className="h-10 px-3 py-2"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Medium (48px)</h5>
                  <Input
                    label="Email Address"
                    placeholder="Email Address"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Large (56px)</h5>
                  <Input
                    label="Company Name"
                    optional
                    placeholder="Company Name (Optional)"
                    className="h-14 px-5 py-4"
                  />
                </div>
              </div>
            </div>

            {/* Textarea Examples */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Textarea Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Default</h5>
                  <TextArea
                    label="Additional Details"
                    placeholder="Please provide additional details related to your inquiry."
                    rows={4}
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Focused</h5>
                  <TextArea
                    label="Message"
                    placeholder="Enter your message here..."
                    rows={4}
                    className="border-2 border-[#FFB81C] focus:ring-[#FFB81C] focus:border-[#FFB81C]"
                  />
                </div>
              </div>
            </div>

            {/* Checkbox Examples */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Checkbox Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Default</h5>
                  <Checkbox
                    label="I agree to the terms and conditions"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Marketing Opt-in</h5>
                  <Checkbox
                    label="By checking this box you are opting in to receive news, marketing, and promotional offers from XPEL."
                  />
                </div>
              </div>
            </div>

            {/* Select Dropdown Examples */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Select Dropdown Examples</h4>
              
              {/* Horizontal Dropdown Row */}
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-600 mb-4">Vehicle Configuration Dropdowns</h5>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <Select
                      options={[
                        { value: 'middle-east', label: 'Middle East' },
                        { value: 'north-america', label: 'North America' },
                        { value: 'europe', label: 'Europe' },
                        { value: 'asia-pacific', label: 'Asia Pacific' }
                      ]}
                      defaultValue="middle-east"
                    />
                    <Select
                      options={[
                        { value: 'passenger-car', label: 'Passenger Car' },
                        { value: 'suv', label: 'SUV' },
                        { value: 'truck', label: 'Truck' },
                        { value: 'motorcycle', label: 'Motorcycle' }
                      ]}
                      defaultValue="passenger-car"
                    />
                    <Select
                      options={[
                        { value: '2023', label: '2023' },
                        { value: '2022', label: '2022' },
                        { value: '2021', label: '2021' },
                        { value: '2020', label: '2020' }
                      ]}
                      defaultValue="2023"
                    />
                    <Select
                      options={[
                        { value: 'toyota', label: 'Toyota' },
                        { value: 'honda', label: 'Honda' },
                        { value: 'bmw', label: 'BMW' },
                        { value: 'mercedes', label: 'Mercedes' }
                      ]}
                      defaultValue="toyota"
                    />
                    <Select
                      options={[
                        { value: 'land-cruiser-300', label: 'Land Cruiser 300' },
                        { value: 'camry', label: 'Camry' },
                        { value: 'corolla', label: 'Corolla' },
                        { value: 'rav4', label: 'RAV4' }
                      ]}
                      defaultValue="land-cruiser-300"
                    />
                    <Select
                      options={[
                        { value: 'g-sport', label: 'G Sport' },
                        { value: 'vx', label: 'VX' },
                        { value: 'sahara', label: 'Sahara' },
                        { value: 'base', label: 'Base' }
                      ]}
                      defaultValue="g-sport"
                    />
                  </div>
                </div>
              </div>

              {/* Individual Dropdown Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Default</h5>
                  <Select
                    label="Region"
                    options={[
                      { value: 'middle-east', label: 'Middle East' },
                      { value: 'north-america', label: 'North America' },
                      { value: 'europe', label: 'Europe' },
                      { value: 'asia-pacific', label: 'Asia Pacific' }
                    ]}
                    defaultValue="middle-east"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Focused</h5>
                  <Select
                    label="Vehicle Type"
                    options={[
                      { value: 'passenger-car', label: 'Passenger Car' },
                      { value: 'suv', label: 'SUV' },
                      { value: 'truck', label: 'Truck' },
                      { value: 'motorcycle', label: 'Motorcycle' }
                    ]}
                    defaultValue="passenger-car"
                    className="border-2 border-[#FFB81C] focus:ring-[#FFB81C] focus:border-[#FFB81C]"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Required</h5>
                  <Select
                    label="Year"
                    required
                    options={[
                      { value: '2023', label: '2023' },
                      { value: '2022', label: '2022' },
                      { value: '2021', label: '2021' },
                      { value: '2020', label: '2020' }
                    ]}
                    defaultValue="2023"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error State</h5>
                  <Select
                    label="Brand"
                    required
                    options={[
                      { value: 'toyota', label: 'Toyota' },
                      { value: 'honda', label: 'Honda' },
                      { value: 'bmw', label: 'BMW' },
                      { value: 'mercedes', label: 'Mercedes' }
                    ]}
                    defaultValue=""
                    variant="error"
                    error="Please select a brand"
                  />
                </div>
              </div>
            </div>

            {/* Form Validation Examples */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Form Validation Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error State</h5>
                  <Input
                    label="Email Address"
                    required
                    type="email"
                    placeholder="Enter email"
                    variant="error"
                    error="Please enter a valid email address"
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Success State</h5>
                  <Input
                    label="Email Address"
                    required
                    type="email"
                    placeholder="Enter email"
                    variant="success"
                    helperText="Email address is valid"
                  />
                </div>
              </div>
            </div>

            {/* Required vs Optional Fields */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Required vs Optional Fields</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Required Fields</h5>
                  <div className="space-y-4">
                    <Input
                      label="First Name"
                      required
                      placeholder="Enter first name"
                    />
                    <Input
                      label="Email"
                      required
                      type="email"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Optional Fields</h5>
                  <div className="space-y-4">
                    <Input
                      label="Company Name"
                      optional
                      placeholder="Enter company name"
                    />
                    <Input
                      label="Phone Number"
                      optional
                      type="tel"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Navigation</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Primary Navigation</h4>
                <nav className="flex space-x-8">
                  <a href="#" className="text-gray-900 font-medium hover:text-amber-500 transition-colors">Home</a>
                  <a href="#" className="text-gray-900 font-medium hover:text-amber-500 transition-colors">Products</a>
                  <a href="#" className="text-gray-900 font-medium hover:text-amber-500 transition-colors">Services</a>
                  <a href="#" className="text-gray-900 font-medium hover:text-amber-500 transition-colors">About</a>
                  <a href="#" className="text-gray-900 font-medium hover:text-amber-500 transition-colors">Contact</a>
                </nav>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Breadcrumbs</h4>
                <nav className="flex items-center space-x-2 text-sm">
                  <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Home</a>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Products</a>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-900 font-medium">Paint Protection Film</span>
                </nav>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Alerts & Notifications</h3>
            
            {/* Banner Alerts */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Banner Alerts</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Info (Default)</h5>
                  <BannerAlert
                    variant="info"
                    headline="Banner Headline"
                    caption="Very long caption text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                        </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Success</h5>
                  <BannerAlert
                    variant="success"
                    headline="Banner Headline"
                    caption="Very long caption text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                        </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Warning</h5>
                  <BannerAlert
                    variant="warning"
                    headline="Banner Headline"
                    caption="Very long caption text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error</h5>
                  <BannerAlert
                    variant="error"
                    headline="Banner Headline"
                    caption="Very long caption text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                </div>
              </div>
            </div>

            {/* Announcement Alerts */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Announcement Alerts</h4>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Info (Default)</h5>
                  <AnnouncementAlert
                    variant="info"
                    text="Announcement text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Success</h5>
                  <AnnouncementAlert
                    variant="success"
                    text="Announcement text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Warning</h5>
                  <AnnouncementAlert
                    variant="warning"
                    text="Announcement text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                      </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error</h5>
                  <AnnouncementAlert
                    variant="error"
                    text="Announcement text"
                    actionText="Action"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                    </div>
                  </div>
                </div>

            {/* Simple Alerts */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Simple Alerts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Info Alert</h5>
                  <Alert
                    variant="info"
                    title="Information"
                    message="This is an informational alert message."
                    actionText="Learn More"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                      </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Success Alert</h5>
                  <Alert
                    variant="success"
                    title="Success"
                    message="Your action was completed successfully."
                    actionText="View Details"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                    </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Warning Alert</h5>
                  <Alert
                    variant="warning"
                    title="Warning"
                    message="Please review your input before proceeding."
                    actionText="Review"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                  </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h5 className="text-sm font-medium text-gray-600 mb-4">Error Alert</h5>
                  <Alert
                    variant="error"
                    title="Error"
                    message="Something went wrong. Please try again."
                    actionText="Try Again"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => console.log('Close clicked')}
                  />
                </div>
              </div>
            </div>

            {/* Alert Specifications */}
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Alert Specifications</h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Banner Alerts:</strong> Larger rectangular components with headline, caption, action button, and close icon.</p>
                <p><strong>Announcement Alerts:</strong> Compact horizontal bars (760px × 44px) with icon, text, action button, and close icon.</p>
                <p><strong>Simple Alerts:</strong> Basic alert components with title, message, action button, and close icon.</p>
                <p><strong>Padding:</strong> 16px for banner alerts, 10px top/bottom, 16px left/right for announcements</p>
                <p><strong>Gap:</strong> 12px between elements</p>
                <p><strong>Corner Radius:</strong> Small (4px)</p>
                <p><strong>Colors:</strong> Info (#DFF2F1), Success (#E6F0D4), Warning (#FDE0D3), Error (#FFD6D7)</p>
                <p><strong>Responsive:</strong> All alerts adapt to different screen sizes</p>
              </div>
            </div>
          </div>
        </section>

        {/* eCommerce Elements Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">eCommerce Elements</h2>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            
            {/* Size Selectors Row */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <div className="grid grid-cols-5 gap-8 mb-4">
                <div className="text-center font-medium text-sm text-gray-900">DEFAULT</div>
                <div className="text-center font-medium text-sm text-gray-900">HOVER</div>
                <div className="text-center font-medium text-sm text-gray-900">ACTIVE</div>
                <div className="text-center font-medium text-sm text-gray-900">OUT OF STOCK</div>
                <div className="text-center font-medium text-sm text-gray-900">OOS HOVER</div>
              </div>
              <div className="grid grid-cols-5 gap-8">
                <div className="text-center">
                  <button className="w-12 h-12 bg-white border border-gray-300 rounded-lg text-gray-500 font-medium">
                    S
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 bg-white border border-gray-900 rounded-lg text-gray-900 font-bold">
                    S
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 bg-gray-900 border border-gray-900 rounded-lg text-white font-bold">
                    S
                  </button>
                </div>
                <div className="text-center relative">
                  <button className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-lg text-gray-400 font-medium cursor-not-allowed" disabled>
                    S
                  </button>
                  <div className="absolute inset-0 w-12 h-12 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                  </div>
                </div>
                <div className="text-center relative">
                  <button className="w-12 h-12 bg-gray-200 border border-gray-400 rounded-lg text-gray-400 font-medium cursor-not-allowed" disabled>
                    S
                  </button>
                  <div className="absolute inset-0 w-12 h-12 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Swatches Row */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="grid grid-cols-5 gap-8 mb-4">
                <div className="text-center font-medium text-sm text-gray-900">DEFAULT</div>
                <div className="text-center font-medium text-sm text-gray-900">HOVER</div>
                <div className="text-center font-medium text-sm text-gray-900">ACTIVE</div>
                <div className="text-center font-medium text-sm text-gray-900">OUT OF STOCK</div>
                <div className="text-center font-medium text-sm text-gray-900">OOS HOVER</div>
              </div>
              <div className="grid grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto ring-2 ring-gray-300"></div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto ring-4 ring-gray-900"></div>
                </div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 w-12 h-12 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-purple-800 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto ring-2 ring-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 w-12 h-12 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-purple-800 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configurator Swatches Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Configurator Swatches</h2>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="grid grid-cols-3 gap-8 mb-4">
                <div className="text-center font-medium text-sm text-gray-900">DEFAULT</div>
                <div className="text-center font-medium text-sm text-gray-900">HOVER</div>
                <div className="text-center font-medium text-sm text-gray-900">ACTIVE</div>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-2 ring-gray-300 relative shadow-lg">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-4 ring-gray-900 relative shadow-lg">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-4 ring-gray-900 relative shadow-lg flex items-center justify-center">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                    {/* White checkmark */}
                    <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-2 ring-gray-300 relative shadow-lg">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-4 ring-gray-900 relative shadow-lg">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-800 rounded-full mx-auto ring-4 ring-gray-900 relative shadow-lg flex items-center justify-center">
                    {/* 3D glossy effect with light reflection */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                    {/* White checkmark */}
                    <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loaders Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Loaders
          </h2>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Loading Spinner</h3>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-12 h-12">
                  <div className="w-12 h-12 border-2 border-yellow-200 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-12 h-12 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium">Note:</p>
                <p>Please update/augment/customize these for a client project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Accordions
          </h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Accordion Components</h3>
            
            {/* Basic Accordion - Matching Reference Image */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Basic Accordion</h4>
              <div className="max-w-2xl">
                <Accordion
                  items={[
                    {
                      id: "style-guide-question-1",
                      title: "THIS IS A QUESTION LOREM ISPUM DOLOR SIT AMET?",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                      id: "style-guide-question-2",
                      title: "THIS IS A QUESTION LOREM ISPUM DOLOR SIT AMET?",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                      id: "style-guide-question-3",
                      title: "THIS IS A QUESTION LOREM ISPUM DOLOR SIT AMET?",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                      id: "style-guide-question-4",
                      title: "THIS IS A QUESTION LOREM ISPUM DOLOR SIT AMET?",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                      id: "style-guide-question-5",
                      title: "THIS IS A QUESTION LOREM ISPUM DOLOR SIT AMET?",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  ]}
                  defaultOpen={[1]}
                />
              </div>
            </div>

            {/* Icon Legend */}
            <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Icon States</h4>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-[#1B1A1A]">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Plus (+) = Closed/Expandable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-[#1B1A1A]">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Minus (-) = Open/Collapsible</span>
                </div>
              </div>
            </div>

            {/* Accordion Specifications */}
            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Accordion Specifications</h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Container:</strong> White background, rounded corners, border styling</p>
                <p><strong>Accordion Items:</strong> Border-top separators, proper spacing</p>
                <p><strong>Typography:</strong> Bold uppercase text, 14px size, #1B1A1A color</p>
                <p><strong>Icons:</strong> 16px × 16px plus/minus icons with proper transitions</p>
                <p><strong>Animation:</strong> Smooth height transitions with opacity changes</p>
                <p><strong>Responsive:</strong> Adapts to different screen sizes</p>
                <p><strong>Accessibility:</strong> Proper ARIA attributes and keyboard navigation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing & Layout Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Spacing & Layout
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Spacing Scale</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">4px (1rem)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">6px (1.5rem)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">8px (2rem)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">12px (3rem)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">16px (4rem)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-amber-500 mr-4"></div>
                  <span className="text-sm text-gray-600">20px (5rem)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Border Radius</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-sm mr-4"></div>
                  <span className="text-sm text-gray-600">Small (4px)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-md mr-4"></div>
                  <span className="text-sm text-gray-600">Medium (6px)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-lg mr-4"></div>
                  <span className="text-sm text-gray-600">Large (8px)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-xl mr-4"></div>
                  <span className="text-sm text-gray-600">Extra Large (12px)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl mr-4"></div>
                  <span className="text-sm text-gray-600">2XL (16px)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Shadows & Effects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Soft Shadow</h4>
              <p className="text-xs text-gray-500">Used for subtle elevation</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-soft border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Medium Shadow</h4>
              <p className="text-xs text-gray-500">Used for cards and panels</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-medium border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Large Shadow</h4>
              <p className="text-xs text-gray-500">Used for modals and overlays</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-large border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Extra Large Shadow</h4>
              <p className="text-xs text-gray-500">Used for hero sections</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Color Swatch Component
interface ColorSwatchProps {
  readonly name: string;
  readonly color: string;
  readonly hex: string;
  readonly description: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, color, hex, description }) => {
  return (
    <div>
      <div className={`w-72 h-20 ${color} rounded mb-3`}> </div>
      <h4 className="font-semibold text-gray-900 text-sm mb-1">{name}</h4>
      <p className="text-xs text-gray-600 mb-1">{hex}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default StyleGuideXpel; 