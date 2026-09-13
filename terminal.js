// ✅ HISTORIQUE DES COMMANDES
let commandHistory = [];
let historyIndex = -1;

const commands = {
    help: {
        description: 'Show list of all available commands',
        execute: () => formatCommandList()
    },
    '?': {
        description: 'Alias for help command',
        execute: () => formatCommandList()
    },
    ls: {
        description: 'List all available commands',
        execute: () => formatCommandList()
    },
    history: {
        description: 'Show command history with numbers',
        execute: () => formatHistory()
    },
    hostname: {
        description: 'Display the hostname of your portfolio',
        execute: () => 'thomas-letard.me'
    },
    whoami: {
        description: 'Display current user information',
        execute: () => 'Thomas Letard (Tuxplorer)\nTSSR Apprentice | Linux & Networking Enthusiast'
    },
    date: {
        description: 'Display current date and time',
        execute: () => {
            const now = new Date();
            return now.toLocaleString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    },
    skills: {
        description: 'Display technical skills and competencies',
        execute: () => `🖥️  SYSTEMS & NETWORKING
    ├─ Linux (Ubuntu, CentOS, Debian)
    ├─ Networking (TCP/IP, routing, VPN)
    ├─ Virtualization (KVM, VirtualBox)
    └─ Infrastructure as Code

🛠️  TOOLS & TECHNOLOGIES
    ├─ Bash / Shell scripting
    ├─ Ansible automation
    ├─ Docker containerization
    ├─ Git & version control
    └─ CLI-first development

🔐 SECURITY & DEVOPS
    ├─ Cybersecurity fundamentals
    ├─ VPN & encryption (WireGuard)
    ├─ System hardening
    └─ Automation & deployment`
    },
    about: {
        description: 'Learn more about Thomas Letard',
        execute: () => `Thomas Letard (Tuxplorer)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Location: Koumac, Nouvelle-Calédonie
🎓 Education: Bac Pro in Digital Systems (2024)
👨‍💼 Role: Apprenti TSSR at Axians
🎯 Goals: Linux, Networking & Cybersecurity
🐧 Passion: CLI, Linux, Open Source`
    },
    projects: {
        description: 'View all projects and portfolio work',
        execute: () => `📦 VPN Automation Script - In Progress
📦 Homelab Setup - Active
📦 Auto-Update Script - Complete
📦 Terminal Portfolio - Complete`
    },
    contact: {
        description: 'Display contact information and social links',
        execute: () => `📧 Email: thomasletard3@gmail.com
📱 Phone: +687 76.84.68
🌐 GitHub: https://github.com/Tuxplorer
🌐 Website: https://thomas-letard.me`
    },
    clear: {
        description: 'Clear the terminal screen',
        execute: () => null
    }
};

function formatCommandList() {
    let output = 'Available commands:\n\n';
    
    const commands_list = Object.keys(commands)
        .filter(key => key !== '?')
        .join('   ');
    
    return output + commands_list;
}

function formatHistory() {
    if (commandHistory.length === 0) {
        return 'No command history yet';
    }
    
    let output = '';
    commandHistory.forEach((cmd, index) => {
        output += `${index + 1}   ${cmd}\n`;
    });
    
    return output;
}

function executeCommand(input) {
    const helpMatch = input.match(/^(\w+)\s*(--help|-h)$/);
    
    if (helpMatch) {
        const commandName = helpMatch[1];
        const cmd = commands[commandName];
        
        if (!cmd) {
            return `Command not found: ${commandName}`;
        }
        
        return `<em style="color: var(--text-gray-medium);">${cmd.description}</em>`;
    }
    
    const cmd = commands[input];
    if (!cmd) {
        return `Command not found: ${input}`;
    }
    return cmd.execute();
}

document.addEventListener('DOMContentLoaded', () => {
    const outputEl = document.getElementById('output');

    outputEl.innerHTML = "Type '?' or 'help' to view available commands.\n\n";

    const promptLine = document.createElement('div');
    promptLine.id = 'promptLine';
    promptLine.innerHTML = `<span id="promptSpan">user@portfolio:~$</span><input type="text" id="commandInput" class="terminalInput" placeholder="" autocomplete="off" />`;
    
    outputEl.appendChild(promptLine);

    outputEl.addEventListener('keydown', (e) => {
        const inputEl = e.target;
        
        if (e.key === 'ArrowUp' && inputEl.classList.contains('terminalInput')) {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputEl.value = commandHistory[commandHistory.length - 1 - historyIndex];
            }
            return;
        }
        
        if (e.key === 'ArrowDown' && inputEl.classList.contains('terminalInput')) {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                inputEl.value = commandHistory[commandHistory.length - 1 - historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                inputEl.value = '';
            }
            return;
        }
    });

    outputEl.addEventListener('keypress', (e) => {
        const inputEl = e.target;
        
        if (e.key === 'Enter' && inputEl.classList.contains('terminalInput')) {
            const userInput = inputEl.value.trim().toLowerCase();
            
            if (!userInput) {
                const newPromptLine = document.createElement('div');
                newPromptLine.id = 'promptLine';
                newPromptLine.innerHTML = `<span id="promptSpan">user@portfolio:~$</span><input type="text" id="commandInput" class="terminalInput" placeholder="" autocomplete="off" />`;
                
                outputEl.appendChild(newPromptLine);
                
                const newInputEl = newPromptLine.querySelector('.terminalInput');
                newInputEl.focus();
                historyIndex = -1;
                
                setTimeout(() => {
                    newInputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 0);
                
                return;
            }
            
            commandHistory.push(userInput);
            historyIndex = -1;
            
            if (userInput === 'clear') {
                outputEl.innerHTML = "Type '?' or 'help' to view available commands.\n\n";
                
                commandHistory = [];
                historyIndex = -1;
                
                const newPromptLine = document.createElement('div');
                newPromptLine.id = 'promptLine';
                newPromptLine.innerHTML = `<span id="promptSpan">user@portfolio:~$</span><input type="text" id="commandInput" class="terminalInput" placeholder="" autocomplete="off" />`;
                
                outputEl.appendChild(newPromptLine);
                
                const newInputEl = newPromptLine.querySelector('.terminalInput');
                newInputEl.focus();
                
                return;
            }
            
            const currentPromptLine = inputEl.closest('#promptLine');
            
            const commandLineWrapper = document.createElement('div');
            commandLineWrapper.id = 'promptLine';
            commandLineWrapper.innerHTML = `<span id="promptSpan">user@portfolio:~$</span><span style="color: var(--text-gray); font-family: 'Lilex', monospace; font-size: 13px;">${userInput}</span>`;
            outputEl.insertBefore(commandLineWrapper, currentPromptLine);
            
            const emptyLine = document.createElement('div');
            outputEl.insertBefore(emptyLine, currentPromptLine);
            
            const result = executeCommand(userInput);
            
            if (result !== null && result !== undefined) {
                const resultLine = document.createElement('div');
                resultLine.innerHTML = `<pre>${result}</pre>`;
                outputEl.insertBefore(resultLine, currentPromptLine);
            }
            
            const emptyLine2 = document.createElement('div');
            outputEl.insertBefore(emptyLine2, currentPromptLine);
            
            currentPromptLine.remove();
            
            const newPromptLine = document.createElement('div');
            newPromptLine.id = 'promptLine';
            newPromptLine.innerHTML = `<span id="promptSpan">user@portfolio:~$</span><input type="text" id="commandInput" class="terminalInput" placeholder="" autocomplete="off" />`;
            
            outputEl.appendChild(newPromptLine);
            
            const newInputEl = newPromptLine.querySelector('.terminalInput');
            newInputEl.focus();
            
            setTimeout(() => {
                newInputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 0);
        }
    });

    document.addEventListener('keypress', (e) => {
        const promptLines = outputEl.querySelectorAll('#promptLine');
        if (promptLines.length > 0) {
            const lastPromptLine = promptLines[promptLines.length - 1];
            const currentInput = lastPromptLine.querySelector('.terminalInput');
            
            if (currentInput && document.activeElement !== currentInput) {
                currentInput.focus();
            }
        }
    });

    const initialInput = outputEl.querySelector('#commandInput');
    initialInput.focus();
});
