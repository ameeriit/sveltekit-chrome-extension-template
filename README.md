# 🚀 SvelteKit Extension Template

This template simplifies building browser extensions with **SvelteKit**, **TypeScript**, **Tailwind**, featuring **SSR (Server-Side Rendering)**. Whether you're a seasoned developer or just starting out, this template provides a solid foundation for creating your own extensions. Contributions, feedback, and feature requests are highly encouraged!

## 📚 Reference Documentation

For those new to extension development or looking for a refresher, refer to the [Extension Development Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/) provided by Chrome.

## 🛠️ Getting Started

Follow these steps to set up your development environment:

1. **Clone the project:** Begin by cloning this repository to your local machine.
2. **Install dependencies:** Use your preferred package manager (PNPM, npm, or yarn) to install the necessary packages. We recommend using PNPM for optimal compatibility.
   ```bash
   pnpm install
   ```
3. **Run development server:** You won't need to start the dev server initially, as we'll be coding and building accordingly. However, if you want to add a watch feature, it can be implemented in a future PR.
   ```bash
   pnpm build-dev
   ```
   Future, i will add watch in pnpm run:
   ```bash
   pnpm run
   ```

## 🚀 Installing the Extension

Once you've developed your extension, follow these steps to install it in your browser:

1. **Open Chrome:** Launch the Chrome browser on your machine.
2. **Access extensions:** Navigate to the extensions section in your browser settings.
3. **Enable developer mode:** Enable developer mode to allow installation of unpacked extensions.
4. **Load unpacked:** Click on "Load unpacked" and select the build directory generated by the project after running `pnpm build`.
5. **Installation complete:** Congratulations! Your extension is now installed. Remember to rebuild and refresh the extension each time you make changes.
6. **Customize your project:** Feel free to customize this template to suit your specific needs. Experiment, explore, and create something amazing!

## 🤝 Contributing

We welcome contributions of all kinds! Whether you have ideas for new features, bug fixes, or improvements to the documentation, we'd love to hear from you. Please submit a pull request with your changes, and we'll review it as soon as possible.

This should provide clear instructions for users to follow when setting up template.
