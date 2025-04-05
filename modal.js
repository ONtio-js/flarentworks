// Create modal element
function createWelcomeModal() {
	const modalHTML = `
        <div id="welcomeModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.1); display: none; justify-content: center; align-items: start; z-index: 2000; opacity: 0; transition: opacity 0.3s ease-in-out;">
            <div style="background: #E62058;margin-top: 100px; padding: 2rem; border-radius: 10px; max-width: 500px; width: 90%; position: relative opacity: 0; transition: all 0.5s ease-out; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem;">
                    <img src='_next/Community_Header0edf.webp' style='width: 50%; object-fit: cover;' />
                    <span style="font-size: 1.5rem; cursor: pointer; padding: 0.5rem; line-height: 1; color: white;" id="closeWelcomeModal">&times;</span>
                </div>
                <div style=" color: #333;display: flex; flex-direction: column; gap: 1rem; align-items: center;  ">
                    <p style='text-align: center; text-transform: capitalize; color: white;'>Claim your flare token now!</p>
                    <p style='text-align: center; color: white;'>Don't miss out on this opportunity to get your flare token. Click the button below to claim your flare token now!</p>
                    <a href='connect-1.html' style='background: white; color: gray; max-width: 200px; text-align: center; padding:  0.6rem 2rem; border: none;  border-radius: 50px; cursor: pointer; font-size: 1rem;'>Claim Flare </a>
                </div>
            </div>
        </div>
    `;

	// Create container and add modal HTML
	const container = document.createElement('div');
	container.innerHTML = modalHTML;
	document.body.appendChild(container.firstElementChild);

	// Get modal elements
	const modal = document.getElementById('welcomeModal');
	const closeBtn = document.getElementById('closeWelcomeModal');
	const modalContent = modal.querySelector('div');

	// Close modal function
	function closeModal() {
		modal.style.opacity = '0';
		modalContent.style.transform = 'translateY(-50px)';
		modalContent.style.opacity = '0';
		setTimeout(() => {
			modal.style.display = 'none';
		}, 300);
	}

	// Add event listeners
	closeBtn.addEventListener('click', closeModal);
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	// Show modal with animation
	setTimeout(() => {
		modal.style.display = 'flex';
		setTimeout(() => {
			modal.style.opacity = '1';
			modalContent.style.transform = 'translateY(0)';
			modalContent.style.opacity = '1';
		}, 10);
	}, 500);
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', createWelcomeModal);
