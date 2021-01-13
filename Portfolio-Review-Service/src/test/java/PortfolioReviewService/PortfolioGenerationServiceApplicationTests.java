package PortfolioReviewService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.forge.PortfolioReviewService.PortfolioReviewServiceApplication;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.repository.PortfolioItemsRepo;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;
import com.forge.PortfolioReviewService.repository.UserRepo;


@SpringBootTest(classes = PortfolioReviewServiceApplication.class)
class PortfolioGenerationServiceApplicationTests {
//
//    @Test
//    void contextLoads() {
//    }
//
    @MockBean
    private PortfolioRepo mockPortfolioRepo;
    @MockBean
    private UserRepo mockURepo;
    @MockBean
    private PortfolioItemsRepo mockPIRepo;

    @Test
    public void testSaveNewPotfolio() {

        //PortfolioRepo portfolioRepoFromContext = context.getBean(Portfolio.class);

        Project p1 = new Project();
        Project p2 = new Project();
        p1.setPortfolioItemId(1);
        p2.setPortfolioItemId(2);
        //projects are a type of PortfolioItem.
        List<PortfolioItems> potList = new ArrayList<PortfolioItems>(); 
        potList.add(p1);
        potList.add(p2);

        Portfolio port1 = new Portfolio(2, "pending", mockURepo.findByUserId(1), potList);

 

        when(mockPortfolioRepo.findById(2)).thenReturn(port1);
        when(mockPIRepo.findById(1)).thenReturn(Optional.of(p1));

       assertEquals(port1, mockPortfolioRepo.findById(2));
       assertEquals(Optional.of(p1), mockPIRepo.findById(1));
    }

}