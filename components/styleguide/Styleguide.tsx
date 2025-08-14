import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Checkbox, FormSection, Input, InputGroup, RequiredFieldNote, TextArea } from "@/components/ui/Input";

export default function StyleGuide() {
  // All icons from _font.scss file
  const icons = [
    // Social Media Icons
    { name: "Facebook", class: "icon-Facebook" },
    { name: "Google", class: "icon-Google" },
    { name: "Instagram", class: "icon-Instagram" },
    { name: "Linkedin", class: "icon-Linkedin" },
    { name: "Pinterest", class: "icon-Pinterest" },
    { name: "Tik-Tok", class: "icon-Tik-Tok" },
    { name: "X", class: "icon-X" },
    { name: "Youtube", class: "icon-Youtube" },

    // Feature Icons
    { name: "Become-a-Dealer", class: "icon-Become-a-Dealer" },
    { name: "Coverage-Options", class: "icon-Coverage-Options" },
    { name: "Fading-Protection", class: "icon-Fading-Protection" },
    { name: "Privacy", class: "icon-Privacy" },
    { name: "Safety", class: "icon-Safety" },
    { name: "Signal", class: "icon-Signal" },
    { name: "UV-Protection", class: "icon-UV-Protection" },
    { name: "VLT", class: "icon-VLT" },
    { name: "Xpel-Installer", class: "icon-Xpel-Installer" },

    // Arrow Icons
    { name: "Arrow-Down", class: "icon-Arrow-Down" },
    { name: "Arrow-Left", class: "icon-Arrow-Left" },
    { name: "Arrow-Right", class: "icon-Arrow-Right" },
    { name: "Arrow-Right-45", class: "icon-Arrow-Right-45" },
    { name: "Arrow-Up", class: "icon-Arrow-Up" },

    // Category Icons
    { name: "Automotive", class: "icon-Automotive" },
    { name: "Bicycle", class: "icon-Bicycle" },
    { name: "Commercial", class: "icon-Commercial" },
    { name: "Marine", class: "icon-Marine" },
    { name: "Residential", class: "icon-Residential" },
    { name: "Tesla", class: "icon-Tesla" },
    { name: "Aircraft", class: "icon-Aircraft" },

    // Navigation Icons
    { name: "Blog", class: "icon-Blog" },
    { name: "Careers", class: "icon-Careers" },
    { name: "Events", class: "icon-Events" },
    { name: "Help-Center", class: "icon-Help-Center" },
    { name: "Investor-Relations", class: "icon-Investor-Relations" },
    { name: "Newsroom", class: "icon-Newsroom" },
    { name: "Videos", class: "icon-Videos" },

    // Action Icons
    { name: "Cart", class: "icon-Cart" },
    { name: "Check", class: "icon-Check" },
    { name: "Close", class: "icon-Close" },
    { name: "Download", class: "icon-Download" },
    { name: "Edit", class: "icon-Edit" },
    { name: "Expand", class: "icon-Expand" },
    { name: "Filter", class: "icon-Filter" },
    { name: "Hamburger", class: "icon-Hamburger" },
    { name: "Hyperlink", class: "icon-Hyperlink" },
    { name: "Language", class: "icon-Language" },
    { name: "Map", class: "icon-Map" },
    { name: "Minus", class: "icon-Minus" },
    { name: "Pause", class: "icon-Pause" },
    { name: "Phone", class: "icon-Phone" },
    { name: "Placeholder", class: "icon-Placeholder" },
    { name: "Play", class: "icon-Play" },
    { name: "Plus", class: "icon-Plus" },
    { name: "Search", class: "icon-Search" },
    { name: "Share", class: "icon-Share" },
    { name: "Shipping", class: "icon-Shipping" },
    { name: "Sort", class: "icon-Sort" },
    { name: "Star", class: "icon-Star" },
    { name: "Star-Empty", class: "icon-Star-Empty" },
    { name: "Tag", class: "icon-Tag" },
    { name: "User", class: "icon-User" },
    { name: "Visibility", class: "icon-Visibility" },
    { name: "Visibility-Off", class: "icon-Visibility-Off" },
    { name: "Warranty", class: "icon-Warranty" },
    { name: "Zoom-In", class: "icon-Zoom-In" },
    { name: "Zoom-Out", class: "icon-Zoom-Out" },

    // Chevron Icons
    { name: "Chevron-Down", class: "icon-Chevron-Down" },
    { name: "Chevron-Left", class: "icon-Chevron-Left" },
    { name: "Chevron-Right", class: "icon-Chevron-Right" },
    { name: "Chevron-Up", class: "icon-Chevron-Up" },
  ];

  return (
    <>
      <Container>
        <div className="py-10">
          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Typography</p>
          <div className="flex flex-col gap-2 mb-12">
            <h1 className="font-h1">Heading 1</h1>
            <h2 className="font-h2">Heading 2</h2>
            <h3 className="font-h3">Heading 3</h3>
            <h4 className="font-h4">Heading 4</h4>
            <h5 className="font-h5">Heading 5</h5>
            <h6 className="font-h6">Heading 6</h6>
          </div>
          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Paragraphs</p>
          <div className="flex flex-col gap-2 mb-12">
            <p className="para-large">Paragraph Large</p>
            <p className="para-large-bold">Paragraph Large Bold</p>
            <p className="para-medium">Paragraph Medium</p>
            <p className="para-medium-bold">Paragraph Medium Bold</p>
            <p className="para-small">Paragraph Small</p>
            <p className="para-small-bold">Paragraph Small Bold</p>
            <p className="para-xsmall">Paragraph Xsmall</p>
          </div>
          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Subtitles</p>
          <div className="flex flex-col gap-2 mb-12">
            <p className="subtitle-large">Subtitle Large</p>
            <p className="subtitle-small">Subtitle Small</p>
          </div>
          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Buttons</p>
          <div className="flex flex-col gap-4 mb-12 items-start">
            <Button type="button" variant="primary" aria-label="primary-btn" buttonStyle="filled" background="light">
              Button Primary
            </Button>
            <Button type="button" variant="secondary" aria-label="primary-btn" buttonStyle="filled" background="light">
              Button Secondary
            </Button>
          </div>

          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Icons</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {icons.map((icon) => (
              <div
                key={icon.class}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <i className={`${icon.class} text-2xl mb-2`}></i>
                <span className="text-xs text-center text-gray-600">{icon.name}</span>
              </div>
            ))}
          </div>
          <p className="font-h4 border-b border-gray-200 pb-4 mb-5">Form Controls</p>
          <div className="flex flex-col gap-2 mb-12">
            <div className="flex flex-col gap-6">
              <FormSection>
                <InputGroup>
                  <Input
                    label="First Name"
                    required
                    error="This is an error"
                    id="first-name"
                    name="firstName"
                    labelFor="first-name"
                  />
                </InputGroup>
                <InputGroup>
                  <Input label="Sample" required id="sample" name="sample" labelFor="sample" />
                </InputGroup>
                <InputGroup>
                  <Input
                    label="Last Name"
                    required
                    helperText="This is a helper text"
                    id="last-name"
                    name="lastName"
                    labelFor="last-name"
                  />
                </InputGroup>
                <Checkbox label="By checking this box you are opting in to receive news, marketing, and promotional offers from XPEL." />
                <TextArea
                  label="Additional Details"
                  placeholder="Please provide additional details related to your inquiry."
                  rows={4}
                />
                <RequiredFieldNote message="* indicates a required field" />
              </FormSection>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
