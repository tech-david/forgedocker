package PortfolioReviewService;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.forge.PortfolioReviewService.controller.ServiceController;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.User;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;
import com.forge.PortfolioReviewService.repository.UserRepo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ServiceControllerTest {
	@MockBean
	private PortfolioRepo portfolioRepo;
	
	@MockBean
	private UserRepo userRepo;
	
	@Autowired
	private ServiceController serviceController;		
	
	@Test
	public void getAllPortfolioTest() {
		List<Portfolio> list = new ArrayList<Portfolio>();
		list.add(new Portfolio(1, "pending", 1, null));
		list.add(new Portfolio(2, "pending", 1, null));
		list.add(new Portfolio(3, "pending", 1, null));
		when(portfolioRepo.findAll()).thenReturn(list);
		
		List<Portfolio> result = serviceController.getPortfolios();
		
		Assertions.assertEquals(3, result.size());
	}
	
	@Test
	public void getPortfoliosByStatusTest() {
		List<Portfolio> list = new ArrayList<Portfolio>();
		list.add(new Portfolio(1, "pending", 1, null));
		list.add(new Portfolio(2, "pending", 1, null));
		list.add(new Portfolio(3, "pending", 1, null));
		when(portfolioRepo.findByStatus("Pending")).thenReturn(list);
		
		List<Portfolio> result = serviceController.getPortfoliosByStatus("Pending");
		
		Assertions.assertEquals(2, result.size());
	}
	
	@Test
	public void getUsersTest() {
		List<User> list = new ArrayList<User>();
		list.add(new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, null));
		list.add(new User(2, "test2@test.com", "password2", "FirstName2", "LastName2", false, null));
		list.add(new User(3, "test3@test.com", "password3", "FirstName3", "LastName3", false, null));
		when(userRepo.findAll()).thenReturn(list);
		
		List<User> result = serviceController.getUsers();
		
		Assertions.assertEquals(3, result.size());
	}
	
	@Test
	public void updatePortfolioTest() {
		Portfolio portfolio = new Portfolio(1, "pending", 1, null);
		
		when(portfolioRepo.save(any())).thenReturn(portfolio);
		
		serviceController.updatePortfolio(portfolio);
		verify(portfolioRepo, times(1)).save(any());
		
	}
	
	@Test
	public void getPortfolioByIDTest() {
		Portfolio portfolio = new Portfolio(1, "pending", 1, null);
		when(portfolioRepo.findById(1)).thenReturn(portfolio);
		
		serviceController.getPortfolioByID("1");
		verify(portfolioRepo, times(1)).findById(1);
	}
	

	@Test
	public void getUserTest() {
		User user = new User(1, "myemail@email.com", "123", "Annie", "Rogers", false, null);
		when(userRepo.findByUserId(1)).thenReturn(user);
		
		User result = serviceController.getUser(1);
		
		Assertions.assertEquals(1, result.getUserId());
		verify(userRepo, times(1)).findByUserId(1);
	}
	
	@Test
	public void getPortfolioTest() {
		User user = new User(1, "myemail@email.com", "123", "Annie", "Rogers", false, null);
		List<Portfolio> list = new ArrayList<Portfolio>();
		list.add(new Portfolio(1, "pending", 1, null));
		list.add(new Portfolio(2, "pending", 1, null));
		
		when(userRepo.findByUserId(1)).thenReturn(user);
		when(portfolioRepo.findByUserId(1)).thenReturn(list); //must be optional user
		
		List<Portfolio> result = serviceController.getPortfolio(1);
		
		Assertions.assertEquals(2, result.size());
		verify(userRepo, times(1)).findByUserId(1);
		verify(portfolioRepo, times(1)).findByUserId(1); //user must be optional
	}
	
	@Test //tests 
	public void createPortfolioTest() {
		List<PortfolioItems> portfolioSection = null;
		Portfolio portfolio = new Portfolio(1, null, 0, portfolioSection );
		when(portfolioRepo.save(portfolio)).thenReturn(portfolio);
		
		serviceController.createPortfolio(0, null); //must be optional portfolio
		
		verify(portfolioRepo, times(1)).save(portfolio);
	}
}
